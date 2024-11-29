import { ISoldier } from "./soldiers";

export interface IRemission {
  _id?: string;
  soldier: ISoldier;
  start_date: Date;
  end_date: Date;
  diagnosis: string;
  description: string;
}

export interface IRemissionPostData {
  soldier: string;
  start_date: Date;
  end_date: Date;
  diagnosis: string;
  description: string;
}