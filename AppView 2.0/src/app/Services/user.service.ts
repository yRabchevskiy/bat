import { Injectable } from '@angular/core';
import { IUser } from '../Store/interfaces/user';

@Injectable()
export class UserService {

  user: IUser | null;

  constructor() {
    this.user = this.getUser();
  }

  getUser() {
    const _user = localStorage.getItem('bat_202_user');
    if (_user) return JSON.parse(_user);
    return null;
  }

  setLocal(user: IUser) {
    this.user = user;
    localStorage.setItem('bat_202_user', JSON.stringify(user));
  }

  clearLocal() {
    localStorage.removeItem('bat_202_user');
    this.user = null;
  }
 
}

