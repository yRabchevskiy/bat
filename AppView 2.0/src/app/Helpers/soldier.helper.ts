import { differenceInDays } from 'date-fns';


export const getDiffOfDays = (startDate: Date, endDate: Date): number | null | undefined => {
  if (!startDate || !endDate) {
    return null;
  }
  return differenceInDays(new Date(endDate), new Date(startDate)) + 1;
};
