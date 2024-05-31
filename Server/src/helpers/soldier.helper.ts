import { BLOOD_TYPES, RANK_TYPES, SEX_TYPE, TYPE_OF_VISIT } from "../models/enum_types/general";

const createSoldierByVisit = (name: string) => ({
  full_name: name,
  birthday: null,
  phone: "",
  rank: [{ date: null, type: RANK_TYPES.UNKNOWN }],
  editional_data: {
    blood_type: BLOOD_TYPES.UNKNOWN,
    sex_type: SEX_TYPE.UNKNOWN,
    address: "",
    summoned: "",
    summoned_date: "",
    position: "",
    unit: "",
    description: "",
  },
  vlc: [],
});

export { createSoldierByVisit }