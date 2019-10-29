import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cold-click-page',
  templateUrl: './cold-click-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColdClickPageComponent {
  sources = {
    clickBasic: {
      html: require('!!raw-loader?lang=html!./click-basic/click-basic.component.html'),
      ts: require('!!raw-loader?lang=typescript!./click-basic/click-basic.component.ts')
    },
    clickWithHttpRequest: {
      html: require('!!raw-loader?lang=html!./click-with-http-request/click-with-http-request.component.html'),
      ts: require('!!raw-loader?lang=typescript!./click-with-http-request/click-with-http-request.component.ts')
    }
  };
}
