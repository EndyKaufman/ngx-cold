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
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

export interface NgxColdFormDirectiveContextFormOptions {
  delay?: number;
  context?: any;
  change?: <T = any>(result: T) => void;
  success?: <T = any>(result: T) => void;
  error?: <T = any>(err: T) => void;
}
export interface NgxColdFormDirectiveContext {
  $implicit: {
    isLoading: boolean;
    result: any;
  };
}
const emptyFunction = () => {};

@Directive({
  selector: '[coldForm]'
})
export class NgxColdFormDirective implements OnChanges, OnDestroy {
  @Input() coldFormOf: AbstractControl;
  @Input() coldFormWith: NgxColdFormDirectiveContextFormOptions = null;

  private context: NgxColdFormDirectiveContext = { $implicit: null };
  private viewRef: EmbeddedViewRef<NgxColdFormDirectiveContext>;
  private valueChangesSubscription: Subscription;

  constructor(
    private templateRef: TemplateRef<NgxColdFormDirectiveContext>,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.context.$implicit = {
      isLoading: false,
      result: null
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('coldFormOf' in changes) {
      this.destroy();
      this.create();
    } else {
      if ('coldFormWith' in changes) {
        this.update();
      }
    }
  }

  ngOnDestroy() {
    this.destroy();
  }

  private create() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    this.subscribeToValueChanges();
  }

  private update() {
    this.subscribeToValueChanges();
  }

  private destroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
    this.viewContainerRef.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private subscribeToValueChanges() {
    const coldFormOf = this.coldFormOf;
    const coldFormWith = this.coldFormWith || {};
    if (!coldFormOf || !coldFormOf.valueChanges) {
      return;
    }
    if (!coldFormWith.context) {
      coldFormWith.context = (this.viewContainerRef as any)._view.context;
    }
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
      this.valueChangesSubscription = null;
    }
    this.valueChangesSubscription = coldFormOf.valueChanges
      .pipe(
        tap(values => {
          this.context.$implicit.result = null;
          this.context.$implicit.isLoading = true;
          this.changeDetectorRef.markForCheck();
        }),
        debounceTime(coldFormWith.delay || 0),
        distinctUntilChanged(),
        tap(values => {
          const result = (coldFormWith.change || emptyFunction).call(coldFormWith.context, values);
          this.context.$implicit.result = result || null;
          this.context.$implicit.isLoading = false;
          this.changeDetectorRef.markForCheck();
        })
      )
      // tslint:disable-next-line: deprecation
      .subscribe(
        (coldFormWith.success || emptyFunction).bind(coldFormWith.context),
        (coldFormWith.error || emptyFunction).bind(coldFormWith.context)
      );
  }
}
