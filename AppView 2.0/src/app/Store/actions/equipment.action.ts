import { createAction, props } from '@ngrx/store';
import { IEquipment, IEquipmentPostData } from '../interfaces/equipments';
export enum EQUIPMENT_ACTIONS {
  GetEquipments = '[Equipment] Get Equipments',
  GetEquipmentsSuccess = '[Equipment] Get Equipments Success',
  GetEquipmentsFailure = '[Equipment] Get Equipments Failure',

  PostEquipment = '[Equipment] Post Equipment',
  PostEquipmentSuccess = '[Equipment] Post Equipment Success',
  PostEquipmentFailure = '[Equipment] Post Equipment Failure',
}

export const getEquipments = createAction(EQUIPMENT_ACTIONS.GetEquipments);

export const getEquipmentsSuccess = createAction(
  EQUIPMENT_ACTIONS.GetEquipmentsSuccess,
  props<{ data: IEquipment[] | [] }>()
);

export const getEquipmentsFailure = createAction(
  EQUIPMENT_ACTIONS.GetEquipmentsFailure,
  props<{ error: string }>()
);

export const postEquipment = createAction(
  EQUIPMENT_ACTIONS.PostEquipment,
  props<{ data: IEquipmentPostData }>()
);

export const postEquipmentSuccess = createAction(
  EQUIPMENT_ACTIONS.PostEquipmentSuccess,
  props<{ item: IEquipment }>()
);

export const postEquipmentFailure = createAction(
  EQUIPMENT_ACTIONS.PostEquipmentFailure,
  props<{ error: string }>()
);
