import React from 'react';
import * as S from './style';

interface Props {
  isSundayStart: boolean;
  transactions: any;
  selectedDate: {
    startDate: Date;
    endDate: Date;
  };
}

const nextMonth = (dateString: string) => {
  const [year, month] = dateString.split('-');
  if (Number(month) === 12) {
    return `${Number(year) + 1}-1`;
  }
  return `${year}-${Number(month) + 1}`;
};

const pushEmptyCalendar = (
  yearMonthKey: string,
  nowSelectedDate: string,
  nowTransactions: any,
  endDateString: string,
  Calendars: any,
): string => {
  let localNowSelectedDate = nowSelectedDate;
  while (
    yearMonthKey !== localNowSelectedDate &&
    JSON.stringify(nowTransactions) === '{}'
  ) {
    if (endDateString === localNowSelectedDate) {
      return 'end';
    }
    Calendars.push({ nowYearMonthKey: `${localNowSelectedDate}` });
    localNowSelectedDate = nextMonth(localNowSelectedDate);
  }
  return localNowSelectedDate;
};

const dateToYearMonth = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
};

const CalendarBind = ({
  isSundayStart,
  transactions = {},
  selectedDate,
  ...props
}: Props): React.ReactElement => {
  const Calendars: Array<any> = [];
  let nowKey = '';
  let nowYearMonthKey = '';
  let nowTransactions: any = {};
  let nowSelectedDate = dateToYearMonth(selectedDate.startDate);
  const endDateString = dateToYearMonth(selectedDate.endDate);
  Object.entries(transactions).forEach((el) => {
    const [key, value] = el;
    const [year, month] = key.split('-');
    const yearMonthKey = `${year}-${month}`;

    nowSelectedDate = pushEmptyCalendar(
      yearMonthKey,
      nowSelectedDate,
      nowTransactions,
      endDateString,
      Calendars,
    );

    if (nowSelectedDate === 'end') {
      return;
    }

    if (nowKey === '') {
      nowKey = key;
      nowYearMonthKey = yearMonthKey;
    }

    if (nowYearMonthKey !== yearMonthKey) {
      nowSelectedDate = nextMonth(nowSelectedDate);
      Calendars.push({ transactions: { ...nowTransactions }, nowYearMonthKey });
      nowYearMonthKey = yearMonthKey;
      nowKey = key;
      nowTransactions = {};

      nowSelectedDate = pushEmptyCalendar(
        yearMonthKey,
        nowSelectedDate,
        nowTransactions,
        endDateString,
        Calendars,
      );
      if (nowSelectedDate === 'end') {
        return;
      }
    }
    nowTransactions[key] = value;
  });
  if (JSON.stringify(nowTransactions) !== '{}') {
    Calendars.push({ transactions: { ...nowTransactions }, nowYearMonthKey });
    nowSelectedDate = nextMonth(nowSelectedDate);
    nowTransactions = {};
  }
  while (endDateString !== nowSelectedDate && nowSelectedDate !== 'end') {
    if (nowSelectedDate === 'end') {
      break;
    }
    if (endDateString === nowSelectedDate) {
      break;
    }
    Calendars.push({ nowYearMonthKey: `${nowSelectedDate}` });
    nowSelectedDate = nextMonth(nowSelectedDate);
  }
  const CalendarComponents = Calendars.map((el: any) => {
    return (
      <S.Calendar
        key={JSON.stringify(el)}
        isSundayStart={isSundayStart}
        transactions={el.transactions}
        selectedDate={new Date(el.nowYearMonthKey)}
      />
    );
  });
  return <S.CalendarBind {...props}>{CalendarComponents}</S.CalendarBind>;
};

export default CalendarBind;
