import { ISoldier } from "../soldier/interfaceses";

export interface IPersonnelData {
  _id?: string;
  name: string;
  soldier_id?: string;
  rank: string;
  position: string;
}

export interface IGeneralUnit<T, V> {
  _id?: string;
  name: string;
  personnel: T[];
  units: V[];
}
export interface IUnit {
  _id?: string;
  name: string;
  personnel: IPersonnelData[];
  units: IGeneralUnit<IPersonnelData, IUnit>[];
}

export interface IBatStructure {
  _id?: string;
  union_name: string;
  bat_name: string;
  vch_name: string;
  combat: ISoldier;
  version: string;
  main_units: IGeneralUnit<IPersonnelData, IUnit>[];
}