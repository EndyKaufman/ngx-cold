import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { defer, Observable, of, Subject, throwError, timer } from 'rxjs';
import { catchError, finalize, first, flatMap, takeUntil, tap } from 'rxjs/operators';

export type NgxColdClickAction<T = any, K = any> = Observable<T> | ((...args: K[]) => Observable<T>);
export interface NgxColdClickDirectiveContextClickOptions {
  delay?: number;
  context?: any;
  success?: <T = any>(result: T) => void;
  error?: <T = any>(err: T) => void;
}
export interface NgxColdClickDirectiveContext {
  $implicit: {
    isLoading: boolean;
    call: <T = any, K = any>(...args: T[]) => Observable<K>;
    apply: <T = any, K = any>(...args: T[]) => Observable<K>;
  };
}
const emptyFunction = () => {};

@Directive({
  selector: '[coldClick]'
})
export class NgxColdClickDirective implements OnChanges, OnDestroy {
  @Input() coldClickOf: NgxColdClickAction = of(null);
  @Input() coldClickWith: NgxColdClickDirectiveContextClickOptions = null;

  private context: NgxColdClickDirectiveContext = { $implicit: null };
  private viewRef: EmbeddedViewRef<NgxColdClickDirectiveContext>;
  private destroyed$ = new Subject<boolean>();

  constructor(
    private templateRef: TemplateRef<NgxColdClickDirectiveContext>,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.context.$implicit = {
      isLoading: false,
      call: this.call.bind(this),
      apply: this.apply.bind(this)
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('coldClickOf' in changes) {
      this.destroy();
      this.create();
    }
  }

  ngOnDestroy() {
    this.destroy();
  }

  private create() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  private destroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.viewContainerRef.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private apply<T = any, K = any>() {
    const args = Array.from<T>(arguments);
    return this.callOrApply<T, K>(args, true);
  }
  private call<T = any, K = any>() {
    const args = Array.from<T>(arguments);
    return this.callOrApply<T, K>(args, false);
  }
  private callOrApply<T = any, K = any>(args: T[], isApply: boolean) {
    const out$ = new Subject<K>();
    const coldClickWith = this.coldClickWith || {};
    const coldClickOf = this.coldClickOf || of(null);
    if (!coldClickWith.context) {
      coldClickWith.context = (this.viewContainerRef as any)._view.context;
    }
    defer(() => {
      this.context.$implicit.isLoading = true;
      this.changeDetectorRef.markForCheck();
      return timer(coldClickWith.delay || 0).pipe(
        flatMap(
          _ =>
            (typeof coldClickOf === 'function'
              ? coldClickOf.apply(coldClickWith.context, isApply ? [args] : args)
              : coldClickOf) as Observable<K>
        )
      );
    })
      .pipe(
        first(),
        catchError(err => {
          this.context.$implicit.isLoading = false;
          this.changeDetectorRef.markForCheck();
          out$.error(err);
          return throwError(err);
        }),
        tap(out => out$.next(out)),
        finalize(() => {
          this.context.$implicit.isLoading = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroyed$)
      )
      // tslint:disable-next-line: deprecation
      .subscribe(
        (coldClickWith.success || emptyFunction).bind(coldClickWith.context),
        (coldClickWith.error || emptyFunction).bind(coldClickWith.context)
      );
    return out$.pipe(first());
  }
}
