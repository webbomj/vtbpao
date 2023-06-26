import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { UsersService } from '../../services/users.service';
import { pipe } from 'rxjs';
import {
  ICompositionUser,
  IData,
  IUsers,
  IUsersData,
} from './setting.interface';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent extends BaseComponent implements OnInit {
  filter = true;

  dataTable: ICompositionUser[] = [];

  fetchData: IUsersData | null = null;

  constructor(private userService: UsersService) {
    super();
  }

  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {
      const users = data.users;
      const dataUser = data.data;
      const allTableUser = this.createUsersArr(users, dataUser);
      this.dataTable = allTableUser;
    });
  }

  toggleFilter() {
    this.filter = !this.filter;
  }

  createUsersArr(users: IUsers[], dataUser: IData[]) {
    const dataTable = dataUser.map((el) => {
      const user = users.find((user) => user.id === el.user_id);
      return {
        ...el,
        ...user,
      };
    });

    return dataTable;
  }
}
