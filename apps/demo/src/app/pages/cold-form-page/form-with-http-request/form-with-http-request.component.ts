import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'form-with-http-request',
  templateUrl: './form-with-http-request.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWithHttpRequestComponent {
  searchField = new FormControl();
  constructor(private httpClient: HttpClient) {}
  onSearch(search: string) {
    return this.httpClient
      .get<{ items }>('https://api.github.com/search/users', {
        params: {
          q: search,
          page: '1',
          per_page: '10'
        }
      })
      .pipe(map(({ items }) => items));
  }
  alert(data: any) {
    console.group('FormWithHttpRequestComponent');
    console.log('Data', data);
    console.groupEnd();
    alert(typeof data === 'string' ? data : JSON.stringify(data));
    return data;
  }
}
