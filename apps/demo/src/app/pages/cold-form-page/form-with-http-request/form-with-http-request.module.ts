import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxColdModule } from 'ngx-cold';
import { SharedModule } from '../../../shared/shared.module';
import { FormWithHttpRequestComponent } from './form-with-http-request.component';
@NgModule({
  imports: [
    SharedModule,
    NgxColdModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    MatListModule
  ],
  declarations: [FormWithHttpRequestComponent],
  exports: [FormWithHttpRequestComponent]
})
export class FormWithHttpRequestModule {}
