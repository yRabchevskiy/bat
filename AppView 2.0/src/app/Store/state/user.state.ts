import { IUser } from "../interfaces/user";

export interface IUserState {
  users: IUser[] | null;
  selectedUser: IUser | null;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
}