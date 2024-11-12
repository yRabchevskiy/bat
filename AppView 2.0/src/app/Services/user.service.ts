import { Injectable } from '@angular/core';
import { IUser } from '../Store/interfaces/user';
import { IAppState } from '../Store/state/app.state';
import { Store } from '@ngrx/store';
import { setCurrentUser } from '../Store/actions/config.action';

@Injectable()
export class UserService {
  private _isAuthenticated: boolean = false;
  constructor(private store: Store<IAppState>) {
    this.getUserFromLocal();
  }

  getUserFromLocal() {
    const _user = localStorage.getItem('bat_202_user');
    if (!_user) return;
    this.store.dispatch(setCurrentUser({ user: JSON.parse(_user) }));
    this._isAuthenticated = true;
  }

  setLocal(user: IUser | null) {
    if (!user) {
      this.clearLocal();
      return;
    }
    this._isAuthenticated = true;
    localStorage.setItem('bat_202_user', JSON.stringify(user));
  }

  clearLocal() {
    this._isAuthenticated = false;
    localStorage.removeItem('bat_202_user');
  }
 
  isAuthcenticated(): boolean {
    return this._isAuthenticated;
  }
}

