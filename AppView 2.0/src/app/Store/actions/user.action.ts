import { Action } from "@ngrx/store";
import { IUser } from "../interfaces/user";

export enum USER_ACTIONS {
  Login = '[User] Login',
  LoginSuccess = '[User] LoginSuccess',
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
  public readonly type = USER_ACTIONS.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = USER_ACTIONS.GetUsersSuccess;
  constructor(public payload: IUser[] | []) {}
}

export class GetUser implements Action {
  public readonly type = USER_ACTIONS.GetUser;
  constructor(public payload: number) {}
}
export class GetUserSuccess implements Action {
  public readonly type = USER_ACTIONS.GetUserSuccess;
  constructor(public payload: IUser | null) {}
}

export type UserActions =
  GetUser | GetUserSuccess | GetUsers | GetUsersSuccess;
