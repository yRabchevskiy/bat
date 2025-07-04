import { getHospitalizations, getHospitalizationsFailure, getHospitalizationsSuccess } from "../actions/hospitalization.action";
import { getRemissions, getRemissionsFailure, getRemissionsSuccess, postRemission, postRemissionFailure, postRemissionSuccess } from "../actions/remission.action";
import { getSoldiers, getSoldiersFailure, getSoldiersSuccess, selectSoldierByIdSuccess, postSoldier, postSoldierFailure, postSoldierSuccess, deleteSoldier, deleteSoldierFailure, deleteSoldierSuccess } from "../actions/soldier.action";
import { getVlks, getVlksSuccess, getVlksFailure } from "../actions/vlk.action";
import { initialSoldierState, ISoldierState } from "../state/soldier.state";
import { createReducer, on } from "@ngrx/store";


export const soldierReducers = createReducer(initialSoldierState,
  on(getSoldiers, (state: ISoldierState) => ({ ...state, loading: true, error: null })),
  on(getSoldiersSuccess, (state: ISoldierState, props) => ({ ...state, soldiers: props.data, loading: false, error: null })),
  on(getSoldiersFailure, (state: ISoldierState, props) => ({ ...state, soldiers: [], loading: false, error: props.error })),

  on(selectSoldierByIdSuccess, (state: ISoldierState, props) => ({ ...state, selectedSoldier: props.soldier })),

  on(postSoldier, (state: ISoldierState, props) => ({ ...state, loading: true, error: null })),
  on(postSoldierSuccess, (state: ISoldierState, props) => ({ ...state, soldiers: [...state.soldiers, props.item], loading: false, error: null })),
  on(postSoldierFailure, (state: ISoldierState, props) => ({ ...state, loading: false, error: props.error })),

  on(deleteSoldier, (state: ISoldierState, props) => ({ ...state, loading: true, error: null })),
  on(deleteSoldierSuccess, (state: ISoldierState, props) => ({ ...state, soldiers: state.soldiers.filter(it => it._id !== props.id), loading: false, error: null })),
  on(deleteSoldierFailure, (state: ISoldierState, props) => ({ ...state, loading: false, error: props.error })),

  
  on(getRemissions, (state: ISoldierState) => ({ ...state, loading: true, error: null })),
  on(getRemissionsSuccess, (state: ISoldierState, props) => ({ ...state, remissions: props.data, loading: false, error: null })),
  on(getRemissionsFailure, (state: ISoldierState, props) => ({ ...state, remissions: [], loading: false, error: props.error })),

  on(postRemission, (state: ISoldierState, props) => ({ ...state, loading: true, error: null })),
  on(postRemissionSuccess, (state: ISoldierState, props) => ({ ...state, remissions: [...state.remissions, props.item], loading: false, error: null })),
  on(postRemissionFailure, (state: ISoldierState, props) => ({ ...state, loading: false, error: props.error })),

  on(getHospitalizations, (state: ISoldierState) => ({ ...state, loading: true, error: null })),
  on(getHospitalizationsSuccess, (state: ISoldierState, props) => ({ ...state, hospitalizations: props.data, loading: false, error: null })),
  on(getHospitalizationsFailure, (state: ISoldierState, props) => ({ ...state, hospitalizations: [], loading: false, error: props.error })),

  on(getVlks, (state: ISoldierState) => ({ ...state, loading: true, error: null })),
  on(getVlksSuccess, (state: ISoldierState, props) => ({ ...state, vlks: props.data, loading: false, error: null })),
  on(getVlksFailure, (state: ISoldierState, props) => ({ ...state, vlks: [], loading: false, error: props.error })),

);