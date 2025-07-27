import { createAction, props } from '@ngrx/store';
import { IVlk, IVlkPostData } from '../interfaces/vlk';
export enum VLK_ACTIONS {
  GetVlks = '[Vlk] Get Vlks',
  GetVlksSuccess = '[Vlk] Get Vlks Success',
  GetVlksFailure = '[Vlk] Get Vlks Failure',

  PostVlk = '[Vlk] Post Vlk',
  PostVlkSuccess = '[Vlk] Post Vlk Success',
  PostVlkFailure = '[Vlk] Post Vlk Failure',
}

export const getVlks = createAction(VLK_ACTIONS.GetVlks);

export const getVlksSuccess = createAction(
  VLK_ACTIONS.GetVlksSuccess,
  props<{ data: IVlk[] | [] }>()
);

export const getVlksFailure = createAction(
  VLK_ACTIONS.GetVlksFailure,
  props<{ error: string }>()
);

export const postVlk = createAction(
  VLK_ACTIONS.PostVlk,
  props<{ data: IVlkPostData }>()
);

export const postVlkSuccess = createAction(
  VLK_ACTIONS.PostVlkSuccess,
  props<{ item: IVlk }>()
);

export const postVlkFailure = createAction(
  VLK_ACTIONS.PostVlkFailure,
  props<{ error: string }>()
);
