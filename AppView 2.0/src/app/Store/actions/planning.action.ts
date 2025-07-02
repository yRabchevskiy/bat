import { createAction, props } from '@ngrx/store';
import { IPlanning, IPlanningPostData } from '../interfaces/planning';

export enum PLANNING_ACTIONS {
  
  GetPlannings = '[Plannings] Get Plannings',
  GetPlanningsSuccess = '[Plannings] Get Plannings Success',
  GetPlanningsFailure = '[Plannings] Get Plannings Failure',

  PostPlanning = '[Plannings] Post Planning',
  PostPlanningSuccess = '[Plannings] Post Planning Success',
  PostPlanningFailure = '[Plannings] Post Planning Failure',

}

export const getPlannings = createAction(
  PLANNING_ACTIONS.GetPlannings
);

export const getPlanningsSuccess = createAction(
  PLANNING_ACTIONS.GetPlanningsSuccess,
  props<{ data: any[] | [] }>()
);

export const getPlanningsFailure = createAction(
  PLANNING_ACTIONS.GetPlanningsFailure,
  props<{ error: string }>()
);

export const postPlanning = createAction(
  PLANNING_ACTIONS.PostPlanning,
  props<{ data: IPlanningPostData }>()
);

export const postPlanningSuccess = createAction(
  PLANNING_ACTIONS.PostPlanningSuccess,
  props<{ item: IPlanning }>()
);

export const postPlanningFailure = createAction(
  PLANNING_ACTIONS.PostPlanningFailure,
  props<{ error: string }>()
);