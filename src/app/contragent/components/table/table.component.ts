import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { ICompositionUser } from '../../pages/setting/setting.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: ICompositionUser[] = [];

  @ViewChildren('checkboxLogin') checkboxLogin!: QueryList<HTMLInputElement>;

  allCheckbox = false;

  checkedQty = 0;

  displayedColumns: string[] = [
    'actions',
    'login',
    'email',
    'phone',
    'is_admin',
    'update_at',
    'create_at',
    'status',
    'is_ecp',
  ];

  getRole(isAdmin: boolean) {
    return isAdmin ? 'Администратор' : 'Пользователь';
  }

  getStatus(status: string) {
    const allStatus = ['ACTIVE', 'BLOCK'];
    return status === allStatus[0] ? 'Активен' : 'Заблокирован';
  }

  checkLogin(event: boolean) {
    if (event) {
      console.log(
        this.checkboxLogin.forEach((el) => {
          el.checked = true;
        })
      );
    } else {
      this.checkboxLogin.forEach((el) => {
        el.checked = false;
      });
    }
    this.countCheckbox();
  }

  checkOneLogin(event: any) {
    console.log(event);
    this.countCheckbox();
  }

  countCheckbox() {
    this.checkedQty = 0;
    this.checkboxLogin.forEach((el) => {
      if (el.checked) {
        this.checkedQty += 1;
      }
    });
  }

  formatePhone(phone: number) {
    const phoneToStr = phone.toString();
    const firstNumber = phoneToStr.slice(0, 1);
    const regionNumber = phoneToStr.slice(1, 4);
    const number = phoneToStr.slice(4);

    return `+${firstNumber}(${regionNumber}) ${number}`;
  }

  formateDate(date: number) {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
