import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxColdClickAction, NgxColdClickDirectiveContextClickOptions } from 'ngx-cold';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'click-basic',
  templateUrl: './click-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickBasicComponent {
  coldClickOptions: NgxColdClickDirectiveContextClickOptions;
  click$: NgxColdClickAction<string>;
  constructor() {
    this.setClick(this.onOkClick$);
  }
  onOkClick$(data: string | string[]): Observable<string> {
    const args = Array.from(arguments);
    const now = new Date();
    return of(`ok - ${JSON.stringify(data)}`).pipe(
      map(text => `${text} [${now} - ${new Date()}]`),
      tap(text => {
        console.group('ClickBasicComponent');
        console.log('Data', data);
        console.log('Text', text);
        console.log('Function Arguments', args);
        console.groupEnd();
        alert(text);
      })
    );
  }
  updateColdClickOptions(options: NgxColdClickDirectiveContextClickOptions) {
    this.coldClickOptions = {
      ...this.coldClickOptions,
      ...options
    };
  }
  setClick(observableClick: NgxColdClickAction<string>) {
    this.click$ = observableClick;
  }
}
