import { BLOOD_TYPES, SEX_TYPE, IName, RANK_TYPES, IPropertyData } from "../interfaces";

export interface IVlc {
  vlc_number: string;
  vlc_date: Date;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
  description: string;
}

export interface ISummomed {
  value: string;
  date: Date;
}
export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: ISummomed;
  position?: string;
  unit?: string;
  description?: string;
}

export interface IRank {
  value: RANK_TYPES;
  date: Date;
}

export interface ISoldPropertiesData<T> {
  [key: string]: T[];
}
export interface ISoldier {
  _id?: string;
  name: IName;
  birthday: Date;
  phone?: string;
  rank: IRank;
  editional_data: ISoldierEditionalData;
  vlc?: IVlc[];
  properties: ISoldPropertiesData<IPropertyData>;
}