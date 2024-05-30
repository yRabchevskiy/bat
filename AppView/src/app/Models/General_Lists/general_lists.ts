import { BLOOD_TYPES, IListItem, RANK_TYPES, SEX_TYPE, TYPE_OF_DISEASE, TYPE_OF_VISIT } from "../general";

export const BLOOD_TYPES_LIST: IListItem<BLOOD_TYPES>[] = [
    { label: '0(-)', value: BLOOD_TYPES.O_NEGATIVE },
    { label: '0(+)', value: BLOOD_TYPES.O_POSITIVE },
    { label: 'A(-)', value: BLOOD_TYPES.A_NEGATIVE },
    { label: 'A(+)', value: BLOOD_TYPES.A_POSITIVE },
    { label: 'B(-)', value: BLOOD_TYPES.B_NEGATIVE },
    { label: 'B(+)', value: BLOOD_TYPES.B_POSITIVE },
    { label: 'AB(-)', value: BLOOD_TYPES.AB_NEGATIVE },
    { label: 'AB(+)', value: BLOOD_TYPES.AB_POSITIVE },
    { label: 'Невідома', value: BLOOD_TYPES.UNKNOWN },
];

export const SEX_TYPE_LIST: IListItem<SEX_TYPE>[] = [
    { label: 'Чоловіча', value: SEX_TYPE.MALE },
    { label: 'Жіноча', value: SEX_TYPE.FEMALE },
    { label: 'Невідома', value: SEX_TYPE.UNKNOWN }
];

export const TYPE_OF_DISEASE_LIST: IListItem<TYPE_OF_DISEASE>[] = [
    { label: 'Хвороба', value: TYPE_OF_DISEASE.DISEASE },
    { label: 'Травма', value: TYPE_OF_DISEASE.TRAUMA },
    { label: 'Поранення', value: TYPE_OF_DISEASE.WOUND },
    { label: 'Контузія', value: TYPE_OF_DISEASE.CONTUSION },
    { label: 'Каліцтво', value: TYPE_OF_DISEASE.MUTILATION },
    { label: 'Самокаліцтво', value: TYPE_OF_DISEASE.SELF_MUTILATION },
];

export const RANK_TYPES_LIST: IListItem<RANK_TYPES>[] = [
    { label: 'Солдат', value: RANK_TYPES.SOLDIER },
    { label: 'Старший солдат', value: RANK_TYPES.SENIOR_SOLDIER },
    { label: 'Молодший сержант', value: RANK_TYPES.JUNIOR_SERGEANT },
    { label: 'Сержант', value: RANK_TYPES.SERGEANT },
    { label: 'Старший сержант', value: RANK_TYPES.SENIOR_SERGEANT },
    { label: 'Головний сержант', value: RANK_TYPES.MAIN_SERGEANT },
    { label: 'Штаб сержант', value: RANK_TYPES.STAFF_SERGEANT },
    { label: 'Майстер сержант', value: RANK_TYPES.MASTER_SERGEANT },
    { label: 'Старший майстер-сержант', value: RANK_TYPES.SENIOR_MASTER_SERGEANT },
    { label: 'Головний майстер-сержант', value: RANK_TYPES.CHIEF_MASTER_SERGEANT },
    { label: 'Молодший лейтинат', value: RANK_TYPES.JUNIOR_LIEUTENANT },
    { label: 'Лейтинат', value: RANK_TYPES.LIEUTENANT },
    { label: 'Старший лейтинант', value: RANK_TYPES.SENIOR_LIEUTENANT },
    { label: 'Капітан', value: RANK_TYPES.CAPTAIN },
    { label: 'Майор', value: RANK_TYPES.MAJOR },
    { label: 'Підполковник', value: RANK_TYPES.LIEUTENANT_COLONEL },
    { label: 'Полковник', value: RANK_TYPES.COLONEL },
    { label: 'Бригадний генерал', value: RANK_TYPES.BRIGADIER_GENERAL },
    { label: 'Генерал майор', value: RANK_TYPES.MAJOR_GENERAL },
    { label: 'Генерал лейтинант', value: RANK_TYPES.LIEUTENANT_GENERAL },
    { label: 'Генерал полковник', value: RANK_TYPES.COLONEL_GENERAL },
    { label: 'Генерал', value: RANK_TYPES.GENERAL },
    { label: 'Невідомо', value: RANK_TYPES.UNKNOWN },
];

export const TYPE_OF_VISIT_LIST: IListItem<TYPE_OF_VISIT>[] = [
    { label: 'Амбулаторний', value: TYPE_OF_VISIT.AMBULATORY },
    { label: 'Госпіталізація', value: TYPE_OF_VISIT.HOSPITALIZATION },
    { label: 'Обстеження', value: TYPE_OF_VISIT.EXAMINATION },
];
