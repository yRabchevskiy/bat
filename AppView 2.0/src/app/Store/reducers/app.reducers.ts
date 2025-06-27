import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { routerReducer } from "@ngrx/router-store";
import { configReducers } from "./config.reduces";
import { userReducers } from "./user.reduces";
import { visitReducers } from "./visit.reduces";
import { soldierReducers } from "./soldier.reduces";
import { remissionReducers } from "./remission.reduces";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  visits: visitReducers,
  soldiers: soldierReducers,
  remissions: remissionReducers,
  config: configReducers,
};