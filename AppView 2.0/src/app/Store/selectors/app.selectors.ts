import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

const selectApp = (state: IAppState) => state;

export const selectDialogType = createSelector(
  selectApp,
  (state: IAppState) => state.dialogType
);