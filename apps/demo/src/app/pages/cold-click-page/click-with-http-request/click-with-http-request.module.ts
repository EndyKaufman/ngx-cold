import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { NgxColdModule } from 'ngx-cold';
import { SharedModule } from '../../../shared/shared.module';
import { ClickWithHttpRequestComponent } from './click-with-http-request.component';

@NgModule({
  imports: [SharedModule, NgxColdModule, FlexLayoutModule, MatInputModule, MatButtonModule],
  declarations: [ClickWithHttpRequestComponent],
  exports: [ClickWithHttpRequestComponent]
})
export class ClickWithHttpRequestModule {}
