import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IEquipmentsState } from '../state/equipments.state';

const selectEquipment = (state: IAppState) => state.equipments;

export const selectEquipmentStateLoading = createSelector(
  selectEquipment,
  (state: IEquipmentsState) => state.loading
);

export const selectEquipmentStateError = createSelector(
  selectEquipment,
  (state: IEquipmentsState) => state.error
);

export const selectSelectedEquipment = createSelector(
  selectEquipment,
  (state: IEquipmentsState) => state.selectedItem
);

export const selectEquipmentList = createSelector(
  selectEquipment,
  (state: IEquipmentsState) => state.equipments
);
