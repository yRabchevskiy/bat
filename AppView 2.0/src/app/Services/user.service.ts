import { Injectable } from '@angular/core';
import { APP_ROLES, IUser } from '../Store/interfaces/user';
import { IAppState } from '../Store/state/app.state';
import { Store } from '@ngrx/store';
import { setCurrentUser } from '../Store/actions/config.action';

@Injectable()
export class UserService {
  private _isAuthenticated: boolean = false;
  private _isAdmin: boolean = false;
  constructor(private store: Store<IAppState>) {
    this.getUserFromLocal();
  }

  getUserFromLocal() {
    const _user = localStorage.getItem('bat_202_user');
    if (!_user) return;
    const _localUser: IUser = JSON.parse(_user);
    this.store.dispatch(setCurrentUser({ user: _localUser }));
    this._isAuthenticated = true;
    this._isAdmin = _localUser.role === APP_ROLES.ADMIN;
  }

  setLocal(user: IUser | null) {
    if (!user) {
      this.clearLocal();
      return;
    }
    this._isAuthenticated = true;
    this._isAdmin = user.role === APP_ROLES.ADMIN;
    localStorage.setItem('bat_202_user', JSON.stringify(user));
  }

  clearLocal() {
    this._isAuthenticated = false;
    this._isAdmin = false;
    localStorage.removeItem('bat_202_user');
  }
 
  isAuthcenticated(): boolean {
    return this._isAuthenticated;
  }

  isAdmin(): boolean {
    return this._isAdmin;
  }
}

