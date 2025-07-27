import { ISoldier } from "./soldiers";

export interface IVlk {
  _id?: string;
  soldier: ISoldier;
  name: string;
  rank: string;
  position: string;
  address: string;
  union: string;
  birthday: string;
  vlk_result: string;
  vlk_number: string;
  vlk_date: string;
  vlk_institution: string;
  diagnosis: string;
}

export interface IVlkPostData {
  soldier_id: string;
  name: string;
  rank: string;
  position: string;
  address: string;
  union: string;
  birthday: string;
  vlk_result: string;
  vlk_number: string;
  vlk_date: string;
  vlk_institution: string;
  diagnosis: string;
}
