import { RouterReducerState } from "@ngrx/router-store";
import { initialUserState, IUserState } from "./user.state";
import { IConfigState, initialConfigState } from "./config.state";
import { initialVisitState, IVisitState } from "./visit.state";
import { initialSoldierState, ISoldierState } from "./soldier.state";
import { CONFIG_ACTIONS } from "../actions/config.action";
import { initialRemissionState, IRemissionState } from "./remission.state";
import { initialPlanningState, IPlanningState } from "./planning.state";
import { initialVlkState, IVlkState } from "./vlk.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  visits: IVisitState;
  remissions: IRemissionState;
  plannings: IPlanningState;
  vlks: IVlkState;
  soldiers: ISoldierState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  visits: initialVisitState,
  soldiers: initialSoldierState,
  remissions: initialRemissionState,
  plannings: initialPlanningState,
  vlks: initialVlkState,
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