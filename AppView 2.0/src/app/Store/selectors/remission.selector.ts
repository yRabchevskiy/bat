import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IRemissionState } from "../state/remission.state";

const selectRemissions = (state: IAppState) => state.remissions;

export const selectRemissionStateLoading = createSelector(
  selectRemissions,
  (state: IRemissionState) => state.loading
);

export const selectRemissionStateError = createSelector(
  selectRemissions,
  (state: IRemissionState) => state.error
);

export const selectSelectedRemission = createSelector(
  selectRemissions,
  (state: IRemissionState) => state.selectedRemission
);

export const selectRemissionList = createSelector(
  selectRemissions,
  (state: IRemissionState) => state.remissions
);
