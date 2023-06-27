import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createDateValidator } from '../../validator/date.validator';
import {
  ICompositionUser,
  IFilteredUser,
} from '../../pages/setting/setting.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() isOpen = false;
  @Input() data!: ICompositionUser[];

  sendFilter = false;

  filteredData!: IFilteredUser;

  @Output() onChanged = new EventEmitter<ICompositionUser[]>();
  @Output() onCancel = new EventEmitter<true>();

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.pattern('[a-zA-z0-9]*')]),
    phone: new FormControl('', [
      Validators.pattern(
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      ),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.pattern(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    create_at: new FormControl('', [createDateValidator()]),
    update_at: new FormControl('', [createDateValidator()]),
    status: new FormControl(''),
    is_admin: new FormControl(''),
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

  applyFilter() {
    if (this.myForm.valid && !this.myForm.pristine) {
      this.sendFilter = true;
      this.filteredData = this.myForm.value;
      const newTableData = this.filterData();
      this.onChanged.emit(newTableData);
    }
  }

  cancelFilter() {
    this.sendFilter = false;
    this.onCancel.emit(true);
  }

  filterData() {
    if (!this.filteredData) return;

    let data = [...this.data];
    const filterOptions = Object.entries(this.filteredData);
    for (let index = 0; index < filterOptions.length; index += 1) {
      const [key, value] = filterOptions[index];
      if (!value) continue;
      if (key === 'create_at' || key === 'update_at') {
        data = data.filter(
          (user) => this.filterDate(user[key]) === this.filterDate(value)
        );
      } else if (key === 'phone') {
        data = data.filter(
          (user) =>
            user[key as keyof ICompositionUser] === this.filterPhone(value)
        );
      } else if (key === 'is_admin') {
        data = data.filter(
          (user) =>
            user[key as keyof ICompositionUser] === this.filterRole(value)
        );
      } else {
        data = data.filter(
          (user) => user[key as keyof ICompositionUser] === value
        );
      }
    }
    return data;
  }

  filterPhone(phone: string) {
    const allPhonesPart = phone.match(/\d/gm);
    return Number(allPhonesPart?.join(''));
  }

  filterRole(role: string) {
    return role === 'admin' ? true : false;
  }

  filterDate(date: string | number) {
    const timeToStamp = new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return timeToStamp;
  }
}
