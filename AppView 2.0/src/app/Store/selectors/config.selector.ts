import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";
import { IConfigState } from "../state/config.state";

const selectConfig = (state: IAppState) => state.config;

export const selectSettings = createSelector(
  selectConfig,
  (state: IConfigState) => state.settings
);

export const selectCurrentUser = createSelector(
  selectConfig,
  (state: IConfigState) => state.currentUser
);

export const selectSelectedPage = createSelector(
  selectConfig,
  (state: IConfigState) => state.selectedPage
);

export const selectConfigLoading = createSelector(
  selectConfig,
  (state: IConfigState) => state.loading
);


export const selectConfigError = createSelector(
  selectConfig,
  (state: IConfigState) => state.error
);