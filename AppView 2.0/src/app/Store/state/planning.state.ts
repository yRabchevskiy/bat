import { IPlanning } from "../interfaces/planning";

export interface IPlanningState {
  error: string | null;
  loading: boolean;

  plannings: IPlanning[];
  selectedPlanning: IPlanning | null;
}

export const initialPlanningState: IPlanningState = {
  error: null,
  loading: false,
  plannings: [],
  selectedPlanning: null,
}