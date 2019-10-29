import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cold-form-page',
  templateUrl: './cold-form-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColdFormPageComponent {
  sources = {
    formBasic: {
      html: require('!!raw-loader?lang=html!./form-basic/form-basic.component.html'),
      ts: require('!!raw-loader?lang=typescript!./form-basic/form-basic.component.ts')
    },
    formWithHttpRequest: {
      html: require('!!raw-loader?lang=html!./form-with-http-request/form-with-http-request.component.html'),
      ts: require('!!raw-loader?lang=typescript!./form-with-http-request/form-with-http-request.component.ts')
    }
  };
}
