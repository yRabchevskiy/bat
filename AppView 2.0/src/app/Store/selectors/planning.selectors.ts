import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IPlanningState } from "../state/planning.state";

const selectPlannings = (state: IAppState) => state.plannings;

export const selectPlanningsStateLoading = createSelector(
  selectPlannings,
  (state: IPlanningState) => state.loading
);

export const selectPlanningsStateError = createSelector(
  selectPlannings,
  (state: IPlanningState) => state.error
);

export const selectSelectedPlanning = createSelector(
  selectPlannings,
  (state: IPlanningState) => state.selectedPlanning
);

export const selectPlanningList = createSelector(
  selectPlannings,
  (state: IPlanningState) => state.plannings
);