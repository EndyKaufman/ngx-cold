import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cold-click-page',
  templateUrl: './cold-click-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColdClickPageComponent {
  sources = {
    clickBasic: {
      html: require('!!raw-loader!./click-basic/click-basic.component.html').default,
      ts: require('!!raw-loader!./click-basic/click-basic.component.ts').default
    },
    clickWithHttpRequest: {
      html: require('!!raw-loader!./click-with-http-request/click-with-http-request.component.html').default,
      ts: require('!!raw-loader!./click-with-http-request/click-with-http-request.component.ts').default
    }
  };
}
