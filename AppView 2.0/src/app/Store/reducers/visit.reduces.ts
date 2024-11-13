import { createReducer, on } from "@ngrx/store";
import { initialVisitState, IVisitState } from "../state/visit.state";
import { getVisitsSuccess } from "../actions/visit.action";


export const visitReducers = createReducer(initialVisitState,
  on(getVisitsSuccess, (state: IVisitState, props) => ({ ...state, visits: props.visits })),
);