import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IVlkState } from '../state/vlk.state';

const selectVlk = (state: IAppState) => state.vlks;

export const selectVlkStateLoading = createSelector(
  selectVlk,
  (state: IVlkState) => state.loading
);

export const selectVlkStateError = createSelector(
  selectVlk,
  (state: IVlkState) => state.error
);

export const selectSelectedVlk = createSelector(
  selectVlk,
  (state: IVlkState) => state.selectedVlk
);

export const selectVlkList = createSelector(
  selectVlk,
  (state: IVlkState) => state.vlks
);
