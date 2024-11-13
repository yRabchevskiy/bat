import { createAction, props } from '@ngrx/store';
import { IUser } from '../interfaces/user';

export enum USER_ACTIONS {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFailure = '[User] Get Users Failure',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
}

export const getUsers = createAction(
  USER_ACTIONS.GetUsers
);

export const getUsersSuccess = createAction(
  USER_ACTIONS.GetUsersSuccess,
  props<{ users: IUser[] | [] }>()
);

export const getUsersFailure = createAction(
  USER_ACTIONS.GetUsersFailure,
  props<{ error: string }>()
);

export const getUser = createAction(
  USER_ACTIONS.GetUser,
  props<{ id: string }>()
);

export const getUserSuccess = createAction(
  USER_ACTIONS.GetUserSuccess,
  props<{ user: IUser | null }>()
);
