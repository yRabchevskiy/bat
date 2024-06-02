export interface IListItem<V> {
  label: string;
  value: V;
}
export enum BLOOD_TYPES {
  O_NEGATIVE = '0(-)',
  O_POSITIVE = '0(+)',
  A_NEGATIVE = 'A(-)',
  A_POSITIVE = 'A(+)',
  B_NEGATIVE = 'B(-)',
  B_POSITIVE = 'B(+)',
  AB_NEGATIVE = 'AB(-)',
  AB_POSITIVE = 'AB(+)',
  UNKNOWN = 'Невідома',
}

export enum RANK_TYPES {
  SOLDIER = 'Солдат',
  SENIOR_SOLDIER = 'Старший солдат',
  JUNIOR_SERGEANT = 'Молодший сержант',
  SERGEANT = 'Сержант',
  SENIOR_SERGEANT = 'Старший сержант',
  MAIN_SERGEANT = 'Головний сержант',
  STAFF_SERGEANT = 'Штаб сержант',
  MASTER_SERGEANT = 'Майстер сержант',
  SENIOR_MASTER_SERGEANT = 'Старший майстер-сержант',
  CHIEF_MASTER_SERGEANT = 'Головний майстер-сержант',
  JUNIOR_LIEUTENANT = 'Молодший лейтинат',
  LIEUTENANT = 'Лейтинат',
  SENIOR_LIEUTENANT = 'Старший лейтинант',
  CAPTAIN = 'Капітан',
  MAJOR = 'Майор',
  LIEUTENANT_COLONEL = 'Підполковник',
  COLONEL = 'Полковник',
  BRIGADIER_GENERAL = 'Бригадний генерал',
  MAJOR_GENERAL = 'Генерал майор',
  LIEUTENANT_GENERAL = 'Генерал лейтинант',
  COLONEL_GENERAL = 'Генерал полковник',
  GENERAL = 'Генерал',
  UNKNOWN = 'Невідомо',
}

export enum SEX_TYPE {
  MALE = 'Male',
  FEMALE = 'Female',
  UNKNOWN = 'Невідома',
}

export enum TYPE_OF_DISEASE {
  DISEASE = 'Захворювання',
  TRAUMA = 'Травма',
  WOUND = 'Поранення',
  MUTILATION = 'Каліцтво',
  SELF_MUTILATION = 'Самокаліцтво',
  CONTUSION = 'Контузія',
}

export enum TYPE_OF_VISIT {
  AMBULATORY = 'Амбулаторний',
  HOSPITALIZATION = 'Госпіталізація',
  EXAMINATION = 'Обстеження',
}

export enum TYPE_OF_VISIT_STATUS {
  ACTIVE = 'Активний',
  PENDING = 'Очікування',
  CLOSED = 'Завершений'
}
