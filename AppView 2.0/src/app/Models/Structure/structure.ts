import { ISoldier } from "../soldiers";

export interface IPersonnelData {
  _id?: string;
  soldier_id?: string;
  name: string;
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
  name: string;
  personnel: IPersonnelData[];
  units: IGeneralUnit<IPersonnelData, IUnit>[];
}

export interface IStructurePostData extends IUnit {
  structure_id: string;
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
