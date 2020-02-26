import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cold-form-page',
  templateUrl: './cold-form-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColdFormPageComponent {
  sources = {
    formBasic: {
      html: require('!!raw-loader!./form-basic/form-basic.component.html').default,
      ts: require('!!raw-loader!./form-basic/form-basic.component.ts').default
    },
    formWithHttpRequest: {
      html: require('!!raw-loader!./form-with-http-request/form-with-http-request.component.html').default,
      ts: require('!!raw-loader!./form-with-http-request/form-with-http-request.component.ts').default
    }
  };
}
