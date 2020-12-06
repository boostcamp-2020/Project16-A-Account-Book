import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');
export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
  dateCustomFormatter: (date: Date | string | number, format: string): string =>
    dayjs(date).format(format),
  monthMaxDate: (date: Date): number => {
    const nowMaxDate = new Date(date.getFullYear(), date.getMonth() + 1, -1);
    return nowMaxDate.getDate() + 1;
  },
  getOneMonthRange: (year: string, month: string) => {
    if (month === '12') {
      return {
        startDate: new Date(`${year}-${month}-1`),
        endDate: new Date(`${Number(year) + 1}-${1}`),
      };
    }
    return {
      startDate: new Date(`${year}-${month}-1`),
      endDate: new Date(`${year}-${Number(month) + 1}`),
    };
  },
  getNextDate: (date: Date | string) =>
    dayjs(date).add(1, 'day').format('YYYY-MM-DD'),
  getOneWeekRange: (date: Date, standard?: boolean) => {
    const now = dayjs(date);
    const day = 1000 * 60 * 60 * 24;
    const term = standard ? now.day() - 1 : now.day();
    const startDate = dayjs(now.valueOf() - day * term);
    const endDate = dayjs(startDate.valueOf() + day * 6);
    return {
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
    };
  },
  getOneYearRange: (date: Date) => {
    const now = dayjs(date);
    const year = now.year();
    const startDate = dayjs(`${year}-01-01`);
    const endDate = dayjs(`${year}-12-31`);
    return {
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
    };
  },
};
