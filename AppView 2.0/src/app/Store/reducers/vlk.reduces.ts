import { createReducer, on } from "@ngrx/store";
import { initialVlkState, IVlkState } from "../state/vlk.state";
import { getVlks, getVlksFailure, getVlksSuccess, postVlk, postVlkFailure, postVlkSuccess } from "../actions/vlk.action";


export const vlkReducers = createReducer(initialVlkState,  
  on(getVlks, (state: IVlkState) => ({ ...state, loading: true, error: null })),
  on(getVlksSuccess, (state: IVlkState, props) => ({ ...state, vlks: props.data, loading: false, error: null })),
  on(getVlksFailure, (state: IVlkState, props) => ({ ...state, vlks: [], loading: false, error: props.error })),

  on(postVlk, (state: IVlkState, props) => ({ ...state, loading: true, error: null })),
  on(postVlkSuccess, (state: IVlkState, props) => ({ ...state, vlks: [props.item, ...state.vlks], loading: false, error: null })),
  on(postVlkFailure, (state: IVlkState, props) => ({ ...state, loading: false, error: props.error })),

);