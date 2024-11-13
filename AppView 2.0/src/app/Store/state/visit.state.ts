import { IVisit } from "../interfaces/visit";

export interface IVisitState {
  visits: IVisit[];
  selectedVisit: IVisit | null;
}

export const initialVisitState: IVisitState = {
  visits: [],
  selectedVisit: null
}