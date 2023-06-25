import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
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
    dateCreate: new FormControl('', [Validators.required]),
    dateUpdate: new FormControl('', [Validators.required]),
  });

  isValidControl(value: string) {
    return this.myForm.controls[value].invalid;
  }

  sent() {
    console.log(this.myForm);
  }

  clear(control: string) {
    this.myForm.controls[control].setValue('');
  }
}
