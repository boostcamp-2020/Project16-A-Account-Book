import dayjs from 'dayjs';

export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
  getOneMonthRange: (year: string, month: string) => {
    if (month === '12') {
      return {
        start: `${year}-${month}`,
        end: `${Number(year) + 1}-${1}`,
      };
    }
    return {
      start: `${year}-${month}`,
      end: `${year}-${Number(month) + 1}`,
    };
  },
  getNextDate: (date: Date | string) =>
    dayjs(date).add(1, 'day').format('YYYY-MM-DD'),
};
