import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxColdModule } from 'ngx-cold';
import { SharedModule } from '../../../shared/shared.module';
import { FormBasicComponent } from './form-basic.component';

@NgModule({
  imports: [
    SharedModule,
    NgxColdModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormBasicComponent],
  exports: [FormBasicComponent]
})
export class FormBasicModule {}
