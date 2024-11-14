import { ISoldier } from "../interfaces/soldiers";

export interface ISoldierState {
  error: string | null;
  loading: boolean;
  soldiers: ISoldier[];
  selectedSoldier: ISoldier | null;
}

export const initialSoldierState: ISoldierState = {
  error: null,
  loading: false,
  soldiers: [],
  selectedSoldier: null
}