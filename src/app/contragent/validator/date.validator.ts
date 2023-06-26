import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const valueToDate = new Date(value).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    console.log(valueToDate, ' da');

    const regexDate = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
    const dateRegex = regexDate.test(valueToDate);

    console.log(dateRegex);

    return !dateRegex ? { date: true } : null;
  };
}
