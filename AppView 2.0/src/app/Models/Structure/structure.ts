import { ISoldier } from "../soldiers";

export interface IPersonnelData {
  name: string;
  soldier_id?: string;
  status: string;
  rank: string;
  position: string;
  id: string;
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
