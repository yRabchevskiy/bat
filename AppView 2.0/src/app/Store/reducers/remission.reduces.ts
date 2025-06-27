import { getRemissions, getRemissionsFailure, getRemissionsSuccess, postRemission, postRemissionFailure, postRemissionSuccess } from "../actions/remission.action";
import { initialRemissionState, IRemissionState } from "../state/remission.state";
import { createReducer, on } from "@ngrx/store";


export const remissionReducers = createReducer(initialRemissionState,  
  on(getRemissions, (state: IRemissionState) => ({ ...state, loading: true, error: null })),
  on(getRemissionsSuccess, (state: IRemissionState, props) => ({ ...state, remissions: props.data, loading: false, error: null })),
  on(getRemissionsFailure, (state: IRemissionState, props) => ({ ...state, remissions: [], loading: false, error: props.error })),

  on(postRemission, (state: IRemissionState, props) => ({ ...state, loading: true, error: null })),
  on(postRemissionSuccess, (state: IRemissionState, props) => ({ ...state, remissions: [...state.remissions, props.item], loading: false, error: null })),
  on(postRemissionFailure, (state: IRemissionState, props) => ({ ...state, loading: false, error: props.error })),

);