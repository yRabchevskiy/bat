import { SoldierDialogType } from "../interfaces/general";
import { IUser } from "../interfaces/user";

export interface IConfigState {
  settings: any;
  currentUser: IUser | null;
  selectedPage: string;
  loading: boolean;
  error: string | null;

  dialogType: SoldierDialogType | null,
}

export const initialConfigState: IConfigState = {
  settings: null,
  currentUser: null,
  selectedPage: '',
  loading: false,
  error: null,

  dialogType: null,
}