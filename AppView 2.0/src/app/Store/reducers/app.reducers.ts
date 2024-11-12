import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { routerReducer } from "@ngrx/router-store";
import { userReducers } from "./user.reduces";
import { configReducers } from "./config.reduces";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};