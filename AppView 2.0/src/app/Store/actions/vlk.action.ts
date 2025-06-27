import { createAction, props } from '@ngrx/store';

export enum VLK_ACTIONS {
  
  GetVlks = '[Vlk] Get Vlks',
  GetVlksSuccess = '[Vlk] Get Vlks Success',
  GetVlksFailure = '[Vlk] Get Vlks Failure',

}

export const getVlks = createAction(
  VLK_ACTIONS.GetVlks
);

export const getVlksSuccess = createAction(
  VLK_ACTIONS.GetVlksSuccess,
  props<{ data: any[] | [] }>()
);

export const getVlksFailure = createAction(
  VLK_ACTIONS.GetVlksFailure,
  props<{ error: string }>()
);

