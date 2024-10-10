import { Injectable } from '@angular/core';
import { IUser } from '../Models/user';

@Injectable()
export class UserService {

  private static user: IUser | null;

  static getUser() {
    const _user = localStorage.getItem('bat_202_user');
    if (_user) return JSON.parse(_user);
    return null;
  }

  static updateUser() {
    UserService.user = this.getUser();
  }

  setLocal(user: IUser) {
    UserService.user = user;
    localStorage.setItem('bat_202_user', JSON.stringify(user));
  }

  getLocal() {
    return UserService.user;
  }

  clearLocal() {
    localStorage.removeItem('bat_202_user');
    UserService.user = null;
  }
 
}

UserService.updateUser();
if (window.addEventListener) {
  window.addEventListener('bat202', bat_event, false);
}

function bat_event(e: any) {
  console.log('User updated from other tab');
  UserService.updateUser();
}
