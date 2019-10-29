# ngx-cold

[![Greenkeeper badge](https://badges.greenkeeper.io/EndyKaufman/ngx-cold.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/EndyKaufman/ngx-cold.svg?branch=master)](https://travis-ci.org/EndyKaufman/ngx-cold)
[![npm version](https://badge.fury.io/js/ngx-cold.svg)](https://badge.fury.io/js/ngx-cold)

Two small directives for work with observable in Angular8+ without subscribe:

- \*coldClick - easy way for run http post from template.
- \*coldForm - easy way for submit typed form data to remote server from template.

## Installation

```bash
npm i --save ngx-cold
```

## Links

[Demo](https://endykaufman.github.io/ngx-cold) - Demo application with ngx-cold.

[Stackblitz](https://stackblitz.com/edit/ngx-cold) - Simply sample of usage on https://stackblitz.com

# Usage

## Usage \*coldClick

app.module.ts

```js
import { HttpClientModule } from '@angular/common/http';
import { NgxColdModule } from 'ngx-cold';

@NgModule({
  imports: [
    ...
    HttpClientModule,
    NgxColdModule,
    ...
  ],
  ...
})
export class AppModule {}
```

app.component.html

```html
...
<p>Save with *coldClick</p>
<button
  *coldClick="let coldSave of onSave"
  (click)="coldSave.call({userData:'custom data'})"
  [disabled]="coldSave.isLoading"
>
  {{ coldSave.isLoading ? 'Save in processing...' : 'Save' }}
</button>
...
```

app.component.ts

```js
import { HttpClient } from '@angular/common/http';
...
constructor(private httpClient: HttpClient) {}
onSave(data: any) {
  return this.httpClient.post('/api/user', data);
}
...
```

## Usage \*coldForm

app.module.ts

```js
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxColdModule } from 'ngx-cold';

@NgModule({
  imports: [
    ...
    HttpClientModule,
    NgxColdModule,
    ReactiveFormsModule,
    FormsModule,
    ...
  ],
  ...
})
export class AppModule {}
```

app.component.html

```html
...
<p>Save with *coldForm</p>
<div *coldForm="let coldForm of searchField; with: { delay: 700, change: onSearch, result: [] }">
  <input [formControl]="searchField" />
  <div *ngIf="coldForm.isLoading">Loading...</div>
  <pre [innerText]="coldForm.result|async|json"></pre>
</div>
...
```

app.component.ts

```js
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
...
searchField = new FormControl();
constructor(
  private httpClient: HttpClient
) {}
onSearch(search: string) {
  return this.httpClient.get('/api/users', {
    params: {
      search
    }
  });
}
...
```

## License

MIT
