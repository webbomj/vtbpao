import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsersData } from '../pages/setting/setting.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getData() {
    const url = `http://cars.cprogroup.ru/api/rubetek/angular-testcase-list/`;
    return this.http.get<IUsersData>(url);
  }
}
