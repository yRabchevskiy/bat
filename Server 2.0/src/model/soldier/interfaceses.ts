import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE } from "../interfaces";

export interface IName {
  first_name: string;
  last_name: string;
  middle_name: string;
}

export interface IVlc {
  vlc_number: string;
  vlc_date: Date;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
  description: string;
}

export interface ISummomed {
  date: Date;
  organization: string;
}


export interface IRank {
  value: RANK_TYPES;
  date: Date;
}

export interface ISoldierProperty {
  value: string;
  date: Date;
  description: string;
}

export interface ISoldierProperties {
  med_properties: ISoldierProperty[];
}

export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: ISummomed; // дані призову призваний
  position?: string;
  unit?: string;
  description?: string;
}

export interface ISoldier {
  _id?: string;
  name: IName;
  birthday: Date;
  phone: string;
  rank: IRank[];
  editional_data: ISoldierEditionalData;
  vlc: IVlc[];
  properties: ISoldierProperties;
}
