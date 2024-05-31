import { TYPE_OF_VISIT } from "../models/enum_types/general";

export const castNumberToVisitsEnum = (type: string) => {
  switch (type) {
    case "0":
      return TYPE_OF_VISIT.AMBULATORY;
    case "1":
      return TYPE_OF_VISIT.HOSPITALIZATION;
    case "2":
      return TYPE_OF_VISIT.EXAMINATION;
    default:
      return null;
  }
};
