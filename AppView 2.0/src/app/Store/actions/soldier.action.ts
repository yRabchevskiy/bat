import { createAction, props } from '@ngrx/store';
import { ISoldier } from '../interfaces/soldiers';

export enum SOLDIER_ACTIONS {
  GetSoldiers = '[Soldier] Get Soldiers',
  GetSoldiersSuccess = '[Soldier] Get Soldiers Success',
  GetSoldiersFailure = '[Soldier] Get Soldiers Failure',
  GetSoldier = '[Soldier] Get Soldier',
  GetSoldierSuccess = '[Soldier] Get Soldier Success',

}

export const getSoldiers = createAction(
  SOLDIER_ACTIONS.GetSoldiers
);

export const getSoldiersSuccess = createAction(
  SOLDIER_ACTIONS.GetSoldiersSuccess,
  props<{ data: ISoldier[] | [] }>()
);

export const getSoldiersFailure = createAction(
  SOLDIER_ACTIONS.GetSoldiersFailure,
  props<{ error: string }>()
);


export const getSoldier = createAction(
  SOLDIER_ACTIONS.GetSoldier,
  props<{ id: string }>()
);

export const getSoldierSuccess = createAction(
  SOLDIER_ACTIONS.GetSoldierSuccess,
  props<{ soldier: ISoldier | null }>()
);

