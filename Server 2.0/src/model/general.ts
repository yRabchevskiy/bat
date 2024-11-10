import Joi from "joi";

export const ranks = Joi.object().keys({
  type: Joi.string().valid(
    'Солдат',
    'Старший солдат',
    'Молодший сержант',
    'Сержант',
    'Старший сержант',
    'Головний сержант',
    'Штаб сержант',
    'Майстер сержант',
    'Старший майстер-сержант',
    'Головний майстер-сержант',
    'Молодший лейтинат',
    'Лейтинат',
    'Старший лейтинант',
    'Капітан',
    'Майор',
    'Підполковник',
    'Полковник',
    'Бригадний генерал',
    'Генерал майор',
    'Генерал лейтинант',
    'Генерал полковник',
    'Генерал',
    'Невідомо'
  ),
});