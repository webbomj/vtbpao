import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createDateValidator } from '../../validator/date.validator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() isOpen = false;

  sendFilter = false;

  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.pattern('[a-zA-z0-9]*')]),
    phone: new FormControl('', [
      Validators.pattern(
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      ),
    ]),
    mail: new FormControl('', [
      Validators.email,
      Validators.pattern(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    dateCreate: new FormControl('', [createDateValidator()]),
    dateUpdate: new FormControl('', [createDateValidator()]),
    status: new FormControl(''),
    role: new FormControl(''),
  });

  isValidControl(value: string) {
    return this.myForm.controls[value].invalid;
  }

  clear(control: string) {
    this.myForm.controls[control].setValue('');
  }

  clearAll() {
    this.myForm.reset();
  }

  getControlValue(control: string) {
    return this.myForm.controls[control].value || null;
  }

  getFilterObj() {
    return {
      login: this.getControlValue('userName'),
      phone: this.getControlValue('phone'),
      mail: this.getControlValue('mail'),
      createAt: this.getControlValue('dateCreate'),
      updateAt: this.getControlValue('dateUpdate'),
      status: this.getControlValue('status'),
      role: this.getControlValue('role'),
    };
  }

  applyFilter() {
    if (this.myForm.valid) {
      this.sendFilter = true;
      console.log(this.myForm.value);
    }
  }

  cancelFilter() {
    //if filter send
    if (this.sendFilter) {
      this.clearAll();
      this.sendFilter = false;
      console.log(this.myForm.value);
    }
  }
}
