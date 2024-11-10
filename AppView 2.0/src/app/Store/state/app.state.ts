import { RouterReducerState } from "@ngrx/router-store";
import { initialUserState, IUserState } from "./user.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}