import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'click-with-http-request',
  templateUrl: './click-with-http-request.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickWithHttpRequestComponent {
  constructor(private httpClient: HttpClient) {}
  onSave(data: any) {
    return this.httpClient.post('https://5a75bbb808118e0012fd4ce6.mockapi.io/api/users', data);
  }
  onSaveWithError(data: any) {
    return this.httpClient.post('/api/users', data);
  }
  alert(data: any) {
    console.group('ClickWithHttpRequestComponent');
    console.log('Data', data);
    console.groupEnd();
    alert(typeof data === 'string' ? data : JSON.stringify(data));
    return data;
  }
}
