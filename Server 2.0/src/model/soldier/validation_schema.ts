import Joi from "joi";

const soldRankValidate = Joi.object().keys({
  value: Joi.string(),
  date: Joi.date().allow(null),
});

const soldSummomedValidate = Joi.object().keys({
  organization: Joi.string().allow(''),
  date: Joi.date().allow(null),
});

const soldEditionalDataValidate = Joi.object({
  blood_type: Joi.string().allow(''),
  sex_type: Joi.string().allow(''),
  address: Joi.string().allow(''),
  summoned: soldSummomedValidate,
  position: Joi.string().allow(''),
  unit: Joi.string().allow(''),
  description: Joi.string().allow(''),
});

const soldVlcValidate = Joi.object({
  vlc_number: Joi.string().allow(''),
  vlc_date: Joi.string(),
  hospital_name: Joi.string().allow(''),
  diagnosis: Joi.string().allow(''),
  recomendation: Joi.string().allow(''),
  description: Joi.string().allow(''),
});

const soldPropertyValidation = Joi.object({
  value: Joi.string(),
  date: Joi.date(),
  description: Joi.string().allow(''),
});

export const SoldierSchemaValidate = Joi.object({
  // _id: Joi.string(),
  name: Joi.string(),
  birthday: Joi.date(),
  phone: Joi.string().allow(''),
  rank: Joi.array().items(soldRankValidate),
  editional_data: soldEditionalDataValidate,
  vlc: Joi.array().items(soldVlcValidate),
  properties: Joi.object({
    med_properties: Joi.array().items(soldPropertyValidation)
  }),
});