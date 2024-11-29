import { RouterReducerState } from "@ngrx/router-store";
import { initialUserState, IUserState } from "./user.state";
import { IConfigState, initialConfigState } from "./config.state";
import { initialVisitState, IVisitState } from "./visit.state";
import { initialSoldierState, ISoldierState } from "./soldier.state";
import { CONFIG_ACTIONS } from "../actions/config.action";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  visits: IVisitState;
  soldiers: ISoldierState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  visits: initialVisitState,
  soldiers: initialSoldierState,
  config: initialConfigState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}

export function clearState(reducer: any) {
  return function (state: any, action: any) {

    if (action.type === CONFIG_ACTIONS.Logout) {
      state = undefined;
    }

    return reducer(state, action);
  };
}