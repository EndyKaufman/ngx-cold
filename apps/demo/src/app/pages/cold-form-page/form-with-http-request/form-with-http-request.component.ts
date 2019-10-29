import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-with-http-request',
  templateUrl: './form-with-http-request.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWithHttpRequestComponent {
  searchField = new FormControl();
  constructor(private httpClient: HttpClient) {}
  onSearch(search: string) {
    return this.httpClient.get('http://5a75bbb808118e0012fd4ce6.mockapi.io/api/users', {
      params: {
        search
      }
    });
  }
  alert(data: any) {
    console.group('FormWithHttpRequestComponent');
    console.log('Data', data);
    console.groupEnd();
    alert(typeof data === 'string' ? data : JSON.stringify(data));
    return data;
  }
}
