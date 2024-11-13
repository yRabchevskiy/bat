import { ISoldier } from "../interfaces/soldiers";
import { IUser } from "../interfaces/user";

export interface ISoldierState {
  soldiers: ISoldier[];
  selectedSoldier: ISoldier | null;
}

export const initialSoldierState: ISoldierState = {
  soldiers: [],
  selectedSoldier: null
}