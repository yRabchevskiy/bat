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

export const selectRemissionList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.remissions
);

export const selectSelectedRemission = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.selectedRemission
);

export const selectRemisionList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.remissions
);
