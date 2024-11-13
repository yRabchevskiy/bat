import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ISoldierState } from "../state/soldier.state";

const selectSoldiers = (state: IAppState) => state.soldiers;

export const selectSoldierList = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.soldiers
);

export const selectSelectedUser = createSelector(
  selectSoldiers,
  (state: ISoldierState) => state.selectedSoldier
);