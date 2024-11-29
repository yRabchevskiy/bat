import { IRemission } from "../interfaces/remission";
import { ISoldier } from "../interfaces/soldiers";

export interface ISoldierState {
  error: string | null;
  loading: boolean;
  soldiers: ISoldier[];
  selectedSoldier: ISoldier | null;

  remissions: IRemission[];
  selectedRemission: IRemission | null;

}

export const initialSoldierState: ISoldierState = {
  error: null,
  loading: false,
  soldiers: [],
  selectedSoldier: null,
  remissions: [],
  selectedRemission: null,
}