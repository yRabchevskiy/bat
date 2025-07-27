import { differenceInDays, parse } from 'date-fns';

export const getDiffOfDays = (
  startDate: Date,
  endDate: Date
): number | null | undefined => {
  if (!startDate || !endDate) {
    return null;
  }
  return differenceInDays(new Date(endDate), new Date(startDate)) + 1;
};

export function parseVlkDate(v: string): Date | null {
  try {
    const result = parse(v, 'dd.MM.yyyy', new Date());
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function parseVlkNumber(v: string): string {
  try {
    const result = v && v.includes('№') ? v.slice(1) : v;
    return result;
  } catch (error) {
    console.log(error);
    return '';
  }
}