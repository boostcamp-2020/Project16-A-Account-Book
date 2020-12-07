import dayjs from 'dayjs';

export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
  monthMaxDate: (date: Date): number => {
    const nowMaxDate = new Date(date.getFullYear(), date.getMonth() + 1, -1);
    return nowMaxDate.getDate() + 1;
  },
  getOneMonthRange: (year: string, month: string) => {
    if (month === '12') {
      return {
        startDate: new Date(`${year}-${month}`),
        endDate: new Date(`${Number(year) + 1}-${1}`),
      };
    }
    return {
      startDate: new Date(`${year}-${month}`),
      endDate: new Date(`${year}-${Number(month) + 1}`),
    };
  },
  getNextDate: (date: Date | string) =>
    dayjs(date).add(1, 'day').format('YYYY-MM-DD'),
};
