import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxColdFormDirectiveContextFormOptions } from 'ngx-cold';

@Component({
  selector: 'form-basic',
  templateUrl: './form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBasicComponent {
  form: FormGroup;
  coldFormOptions: NgxColdFormDirectiveContextFormOptions = {
    change: this.alert
  };
  constructor(private formBuilder: FormBuilder) {
    this.updateForm({
      username: '',
      password: ''
    });
  }
  updateColdFormOptions(options: NgxColdFormDirectiveContextFormOptions) {
    this.coldFormOptions = {
      ...this.coldFormOptions,
      ...options
    };
  }
  updateForm(controlsConfig: { [key: string]: any }) {
    this.form = this.formBuilder.group(controlsConfig);
  }
  alert(data: any) {
    console.group('FormBasicComponent: alert');
    console.log('Data', data);
    console.groupEnd();
    alert(typeof data === 'string' ? data : JSON.stringify(data));
    return data;
  }
}
