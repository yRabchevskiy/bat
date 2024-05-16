import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE, TYPE_OF_DISEASE } from './general';

export interface IVisit {
  date_in?: Date;
  date_out?: Date;
  pre_diagnosis?: string;
  final_diagnosis?: string;
  hospital_name?: string;
  recomendation?: string;
  is_hospitalization: boolean;
  type_of_disease: TYPE_OF_DISEASE;
}

export interface ISoldierEditionalData {
  blood_type: BLOOD_TYPES;
  rank: RANK_TYPES;
  sex_type: SEX_TYPE;
  address?: string;
  phone?: string;
  summoned?: string;
  summoned_date?: string;
  unit?: string;
}
export interface ISoldier {
  full_name: string;
  birthday: Date;
  editional_data: ISoldierEditionalData;
  visits: IVisit[];
}
