import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { UsersService } from '../../services/users.service';
import {
  ICompositionUser,
  IData,
  IFilteredUser,
  IUsers,
  IUsersData,
} from './setting.interface';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent extends BaseComponent implements OnInit {
  filter = true;

  dataTable: ICompositionUser[] = [];

  secondDataTable: ICompositionUser[] = [];

  fetchData: IUsersData | null = null;

  eventsSubject: Subject<string> = new Subject<string>();

  emitEventToChild(cmd: string) {
    this.eventsSubject.next(cmd);
  }

  constructor(
    private userService: UsersService,
    private storage: LocalStorageService
  ) {
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
    const fakeUser = {
      create_at: Number(new Date().toString()),
      update_at: Number(new Date().toString()),
      id: 1,
      name: '',
      phone: 7,
      email: '',
    };
    const dataTable = dataUser.map((el) => {
      const user = users.find((user) => user.id === el.user_id);
      if (user) {
        return {
          ...el,
          ...user,
        };
      }

      return {
        ...el,
        ...fakeUser,
      };
    });

    return dataTable;
  }

  setNewData(event: ICompositionUser[]) {
    this.secondDataTable = this.dataTable;
    this.dataTable = event;
  }

  setOldData(event: boolean) {
    this.dataTable = this.secondDataTable;
  }

  banUser(events: string[]) {
    events.forEach((event) => {
      this.dataTable.forEach((el) => {
        if (el.name === event) {
          if (el.status !== 'BLOCK') {
            this.storage.setData(events, 'ban');
          }
          el.status = 'BLOCK';
        }
      });
    });
  }

  unbanUser(events: string[]) {
    events.forEach((event) => {
      this.dataTable.forEach((el) => {
        if (el.name === event) {
          if (el.status !== 'ACTIVE') {
            this.storage.setData(events, 'unban');
          }
          el.status = 'ACTIVE';
        }
      });
    });
  }
}
