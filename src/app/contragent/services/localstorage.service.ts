import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setData(data: string[], type: string) {
    localStorage.setItem('priznak', `${type}: ${JSON.stringify(data)}`);
  }
}
