import { ISoldier } from "../soldier/interfaceses";

export interface IRemission {
  _id?: string;
  soldier: ISoldier;
  start_date: Date;
  end_date: Date;
  diagnosis: string;
  description: string;
}
