export enum APP_ROLES {
  USER = 'User',
  ADMIN = 'Admin'
}

export interface IAuth {
  nickname: string;
  password: string;
}

export interface IUser {
  _id?: string;
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: APP_ROLES;
}
