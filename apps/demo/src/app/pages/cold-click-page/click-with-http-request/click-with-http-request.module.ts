import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxColdModule } from 'ngx-cold';
import { SharedModule } from '../../../shared/shared.module';
import { ClickWithHttpRequestComponent } from './click-with-http-request.component';

@NgModule({
  imports: [SharedModule, NgxColdModule, FlexLayoutModule, MatInputModule, MatButtonModule],
  declarations: [ClickWithHttpRequestComponent],
  exports: [ClickWithHttpRequestComponent]
})
export class ClickWithHttpRequestModule {}
