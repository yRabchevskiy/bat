import Joi from "joi";


export const VlkSchemaValidate = Joi.object({
  soldier_id: Joi.string().allow(''),
  name: Joi.string(),
  rank: Joi.string(),
  position: Joi.string(),
  address: Joi.string(),
  union: Joi.string(),
  birthday: Joi.string(),
  vlk_result: Joi.string(),
  vlk_number: Joi.string(),
  vlk_date: Joi.string(),
  vlk_institution: Joi.string(),
  diagnosis: Joi.string(),
});
