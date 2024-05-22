import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE } from './general';

export interface IVlc {
  number: string;
  date: string;
  hospital_name: string;
  diagnosis: string;
  recomendation: string;
}

export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  summoned?: string;
  summoned_date?: string;
  unit?: string;
}

export interface IRank {
  date?: Date | null;
  type: RANK_TYPES;
}

export interface ISoldier {
  _id?: string;
  full_name: string;
  birthday: Date;
  phone?: string;
  rank: IRank[];
  editional_data: ISoldierEditionalData;
  vlc?: IVlc[];
}
