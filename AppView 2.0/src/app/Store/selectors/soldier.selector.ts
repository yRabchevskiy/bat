import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ISoldierState } from "../state/soldier.state";

const selectSoldiers = (state: IAppState) => state.soldiers;

export const selectSoldierStateLoading = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.loading
);

export const selectSoldierStateError = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.error
);

export const selectSoldierList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.soldiers
);

export const selectSelectedUser = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.selectedSoldier
);

export const selectSelectedHospitalization = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.selectedHospitalization
);

export const selectHospitalizationList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.hospitalizations
);


export const selectSelectedVlk = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.selectedVlk
);

export const selectVlkList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.vlks
);