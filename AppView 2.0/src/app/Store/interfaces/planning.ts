import { TYPE_OF_PLANNING } from "./Enums/general";
import { ISoldier } from "./soldiers";

export interface IPlanning {
  _id?: string;
  soldier: ISoldier;
  rank: string;
  name: string;
  union: string;
  planning_date: Date;
  type: TYPE_OF_PLANNING;
  description: string;
}

export interface IPlanningPostData {
  soldier_id: string;
  rank: string;
  name: string;
  union: string;
  planning_date: Date;
  type: TYPE_OF_PLANNING;
  description: string;
}