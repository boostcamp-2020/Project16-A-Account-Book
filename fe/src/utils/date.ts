import dayjs from 'dayjs';

export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
  monthMaxDate: (date: Date): number => {
    const nowMaxDate = new Date(date.getFullYear(), date.getMonth() + 1, -1);
    return nowMaxDate.getDate() + 1;
  },
};
