import Joi from "joi";

export const PlanningSchemaValidate = Joi.object({
  soldier_id: Joi.string().allow(""),
  type: Joi.string().allow(""),
  planning_date: Joi.string(),
  description: Joi.string().allow(""),

  rank: Joi.string().allow(""),
  name: Joi.string(),
  union: Joi.string().allow(""),
});
