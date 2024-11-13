import { createAction, props } from '@ngrx/store';
import { IVisit } from '../interfaces/visit';

export enum VISIT_ACTIONS {
  GetVisits = '[Visit] Get Visits',
  GetVisitsSuccess = '[Visit] Get Visits Success',
  GetVisit = '[Visit] Get Visit',
}

export const getVisits = createAction(
  VISIT_ACTIONS.GetVisits
);

export const getVisitsSuccess = createAction(
  VISIT_ACTIONS.GetVisitsSuccess,
  props<{ visits: IVisit[] | [] }>()
);

export const getVisit = createAction(
  VISIT_ACTIONS.GetVisit,
  props<{ visit: IVisit }>()
);

