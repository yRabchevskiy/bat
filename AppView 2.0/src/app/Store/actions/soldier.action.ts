import { createAction, props } from '@ngrx/store';
import { ISoldier } from '../interfaces/soldiers';

export enum SOLDIER_ACTIONS {
  GetSoldiers = '[Soldier] Get Soldiers',
  GetSoldiersSuccess = '[Soldier] Get Soldiers Success',
  GetSoldiersFailure = '[Soldier] Get Soldiers Failure',

  SelectSoldierById = '[Soldier] Select Soldier',
  SelectSoldierByIdSuccess = '[Soldier] Select Soldier Success',

  PostSoldier = '[Soldier] Post Soldier',
  PostSoldierSuccess = '[Soldier] Post Soldier Success',
  PostSoldierFailure = '[Soldier] Post Soldier Failure',

  deleteSoldier = '[Soldier] Delete Soldier',
  deleteSoldierSuccess = '[Soldier] Delete Soldier Success',
  deleteSoldierFailure = '[Soldier] Delete Soldier Failure',
}

export const getSoldiers = createAction(
  SOLDIER_ACTIONS.GetSoldiers
);

export const getSoldiersSuccess = createAction(
  SOLDIER_ACTIONS.GetSoldiersSuccess,
  props<{ data: ISoldier[] }>()
);

export const getSoldiersFailure = createAction(
  SOLDIER_ACTIONS.GetSoldiersFailure,
  props<{ error: string }>()
);

export const postSoldier = createAction(
  SOLDIER_ACTIONS.PostSoldier,
  props<{ data: ISoldier }>()
);

export const postSoldierSuccess = createAction(
  SOLDIER_ACTIONS.PostSoldierSuccess,
  props<{ item: ISoldier }>()
);

export const postSoldierFailure = createAction(
  SOLDIER_ACTIONS.PostSoldierFailure,
  props<{ error: string }>()
);

export const selectSoldierById = createAction(
  SOLDIER_ACTIONS.SelectSoldierById,
  props<{ id: string }>()
);

export const selectSoldierByIdSuccess = createAction(
  SOLDIER_ACTIONS.SelectSoldierByIdSuccess,
  props<{ soldier: ISoldier | null }>()
);


export const deleteSoldier = createAction(
  SOLDIER_ACTIONS.deleteSoldier,
  props<{ id: string }>()
);

export const deleteSoldierSuccess = createAction(
  SOLDIER_ACTIONS.deleteSoldierSuccess,
  props<{ id: string }>()
);

export const deleteSoldierFailure = createAction(
  SOLDIER_ACTIONS.deleteSoldierFailure,
  props<{ error: string }>()
);