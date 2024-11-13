import { TYPE_OF_VISIT, TYPE_OF_DISEASE, TYPE_OF_VISIT_STATUS } from "../interfaces";
import { ISoldier } from "../soldier/interfaceses";

export interface IVisit {
  _id?: string;
  soldier: ISoldier; // ISoldier;
  date_in?: Date; // дата скерування, госпіталізації
  date_out?: Date; // дата виписки
  pre_diagnosis?: string; // діагноз при направденні
  in_diagnosis?: string; // діагноз при госп
  final_diagnosis?: string; // діагноз заключний
  hospital_name?: string;
  type_of_visit: TYPE_OF_VISIT;
  type_of_disease: TYPE_OF_DISEASE;
  complaint?: string; // опис проведеної допомоги
  recomendation?: string;
  status?: TYPE_OF_VISIT_STATUS;
}
