import { IUser } from "../interfaces/user";

export interface IUserState {
  users: IUser[];
  selectedUser: IUser | null;
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: null
}