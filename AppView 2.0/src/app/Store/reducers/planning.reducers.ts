import { createReducer, on } from "@ngrx/store";
import { initialPlanningState, IPlanningState } from "../state/planning.state";
import { getPlannings, getPlanningsSuccess, getPlanningsFailure, postPlanning, postPlanningSuccess, postPlanningFailure } from "../actions/planning.action";


export const planningReducers = createReducer(initialPlanningState,  
  on(getPlannings, (state: IPlanningState) => ({ ...state, loading: true, error: null })),
  on(getPlanningsSuccess, (state: IPlanningState, props) => ({ ...state, plannings: props.data, loading: false, error: null })),
  on(getPlanningsFailure, (state: IPlanningState, props) => ({ ...state, plannings: [], loading: false, error: props.error })),

  on(postPlanning, (state: IPlanningState, props) => ({ ...state, loading: true, error: null })),
  on(postPlanningSuccess, (state: IPlanningState, props) => ({ ...state, plannings: [...state.plannings, props.item], loading: false, error: null })),
  on(postPlanningFailure, (state: IPlanningState, props) => ({ ...state, loading: false, error: props.error })),

);
