import { createAction, props } from '@ngrx/store';
import { IAuth, IUser } from '../interfaces/user';
import { IApiRes } from '../../Models/api';

export enum CONFIG_ACTIONS {
  Login = '[Config] Login',
  LoginSuccess = '[Config] LoginSuccess',
  LoginError = '[Config] LoginError',

  SetCurrentUserFromLocal = '[Config] SetCurrentUserFromLocal',
  SetSelectedPage = '[Config] SetSelectedPage'
}

export const setCurrentUser = createAction(
  CONFIG_ACTIONS.SetCurrentUserFromLocal,
  props<{ user: IUser }>()
);

export const setSelectedPage = createAction(
  CONFIG_ACTIONS.SetSelectedPage,
  props<{ page: string }>()
);

export const login = createAction(
  CONFIG_ACTIONS.Login,
  props<{ data: IAuth }>()
);

export const loginSuccess = createAction(
  CONFIG_ACTIONS.LoginSuccess,
  props<{ data: IUser }>()
);

export const loginFailure = createAction(
  CONFIG_ACTIONS.LoginError,
  props<{ data: IApiRes<IUser> }>()
);