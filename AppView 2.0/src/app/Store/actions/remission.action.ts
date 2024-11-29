import { createAction, props } from '@ngrx/store';
import { IRemission, IRemissionPostData } from '../interfaces/remission';

export enum REMISSION_ACTIONS {
  
  GetRemissions = '[Remission] Get Remissions',
  GetRemissionsSuccess = '[Remission] Get Remissions Success',
  GetRemissionsFailure = '[Remission] Get Remissions Failure',

  PostRemission = '[Remission] Post Remission',
  PostRemissionSuccess = '[Remission] Post Remission Success',
  PostRemissionFailure = '[Remission] Post Remission Failure',

}

export const getRemissions = createAction(
  REMISSION_ACTIONS.GetRemissions
);

export const getRemissionsSuccess = createAction(
  REMISSION_ACTIONS.GetRemissionsSuccess,
  props<{ data: IRemission[] | [] }>()
);

export const getRemissionsFailure = createAction(
  REMISSION_ACTIONS.GetRemissionsFailure,
  props<{ error: string }>()
);

export const postRemission = createAction(
  REMISSION_ACTIONS.PostRemission,
  props<{ data: IRemissionPostData }>()
);

export const postRemissionSuccess = createAction(
  REMISSION_ACTIONS.PostRemissionSuccess,
  props<{ item: IRemission }>()
);

export const postRemissionFailure = createAction(
  REMISSION_ACTIONS.PostRemissionFailure,
  props<{ error: string }>()
);
