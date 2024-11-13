import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";
import { IVisitState } from "../state/visit.state";

const selectVisits = (state: IAppState) => state.visits;

export const selectVisitList = createSelector(
  selectVisits,
  (state: IVisitState) => state.visits
);

export const selectVisit = createSelector(
  selectVisits,
  (state: IVisitState) => state.selectedVisit
);