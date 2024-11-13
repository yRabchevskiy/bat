import { getSoldiersSuccess, getSoldierSuccess } from "../actions/soldier.action";
import { initialSoldierState, ISoldierState } from "../state/soldier.state";
import { createReducer, on } from "@ngrx/store";


export const soldierReducers = createReducer(initialSoldierState,
  on(getSoldiersSuccess, (state: ISoldierState, props) => ({ ...state, soldiers: props.data })),
  on(getSoldierSuccess, (state: ISoldierState, props) => ({ ...state, selectedSoldier: props.soldier })),
  
);