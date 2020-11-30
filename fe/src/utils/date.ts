import dayjs from 'dayjs';

export default {
  dateFormatter: (date: Date): string => dayjs(date).format('YYYY-MM-DD'),
};
