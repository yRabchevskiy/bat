import Joi from "joi";

export const PersonnelDataSchema = Joi.object({
  name: Joi.string(),
  soldier_id: Joi.string(),
  rank: Joi.string(),
  position: Joi.string(),
});

export const UnitDataSchema = Joi.object({
  name: Joi.string(),
  personnel: Joi.array(),
  units: Joi.array(), // GeneralUnitSchema[];
});

export const GeneralUnitSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string(),
  personnel: Joi.array(),
  units: Joi.array(),
});

export const BatStructureSchemaValidate = Joi.object({
  _id: Joi.string(),
  union_name: Joi.string(),
  bat_name: Joi.string(),
  vch_name: Joi.string(),
  combat: Joi.string(),
  version: Joi.string(),
  main_units: [GeneralUnitSchema],
});