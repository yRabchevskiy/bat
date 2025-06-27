import { createAction, props } from '@ngrx/store';

export enum HOSPITALIZATION_ACTIONS {
  
  GetHospitalizations = '[Hospitalization] Get Hospitalizations',
  GetHospitalizationsSuccess = '[Hospitalization] Get Hospitalizations Success',
  GetHospitalizationsFailure = '[Hospitalization] Get Hospitalizations Failure',

}

export const getHospitalizations = createAction(
  HOSPITALIZATION_ACTIONS.GetHospitalizations
);

export const getHospitalizationsSuccess = createAction(
  HOSPITALIZATION_ACTIONS.GetHospitalizationsSuccess,
  props<{ data: any[] | [] }>()
);

export const getHospitalizationsFailure = createAction(
  HOSPITALIZATION_ACTIONS.GetHospitalizationsFailure,
  props<{ error: string }>()
);
