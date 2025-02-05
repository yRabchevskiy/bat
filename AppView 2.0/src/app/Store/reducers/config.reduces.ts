import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, setCurrentUser, setDialogType, setSelectedPage } from "../actions/config.action";
import { IConfigState, initialConfigState } from "../state/config.state";

export const configReducers = createReducer(initialConfigState,
  on(setSelectedPage, (state: IConfigState, props) => {
    return { ...state, selectedPage: props.page };
  }),
  on(setCurrentUser, (state: IConfigState, props) => {
    return { ...state, currentUser: props.user };
  }),
  on(login, (state: IConfigState) => ({ ...state, loading: true, error: null, currentUser: null })),
  on(loginSuccess, (state: IConfigState, props) => ({ ...state, currentUser: props.data, error: null, loading: false })),
  on(loginFailure, (state: IConfigState, props) => ({ ...state, error: props.data.message, loading: false })),
  on(setDialogType, (state: IConfigState, props) => ({ ...state, dialogType: props.dialogType })),
);