import { differenceInDays } from 'date-fns';
import { ISoldier } from '../Store/interfaces/soldiers';

export const buildSoldierFullName = (soldier: ISoldier): string => {
  if (!soldier || !soldier.name) {
    return '';
  }

  const { first_name, last_name, middle_name } = soldier.name;
  return `${last_name} ${first_name} ${middle_name || ''}`.trim();
};

export const getDiffOfDays = (startDate: Date, endDate: Date): number | null | undefined => {
  if (!startDate || !endDate) {
    return null;
  }
  return differenceInDays(new Date(endDate), new Date(startDate)) + 1;
};
