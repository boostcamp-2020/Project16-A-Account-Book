import dayjs from 'dayjs';

export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
  monthMaxDate: (date: Date): number => {
    const nextMonth = `${date.getFullYear()}-${date.getMonth() + 1}-{-1}`;
    const nowMaxDate = new Date(nextMonth);
    return nowMaxDate.getDate() + 1;
  },
};
