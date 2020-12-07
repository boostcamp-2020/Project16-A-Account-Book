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

const pushEmptyCalender = (
  yearMonthKey: string,
  nowSelectedDate: string,
  nowTransactions: any,
  endDateString: string,
  Calenders: any,
): string => {
  let localNowSelectedDate = nowSelectedDate;
  while (
    yearMonthKey !== localNowSelectedDate &&
    JSON.stringify(nowTransactions) === '{}'
  ) {
    if (endDateString === localNowSelectedDate) {
      return 'end';
    }
    Calenders.push({ nowYearMonthKey: `${localNowSelectedDate}` });
    localNowSelectedDate = nextMonth(localNowSelectedDate);
  }
  return localNowSelectedDate;
};

const CalenderBind = ({
  isSundayStart,
  transactions = {},
  selectedDate,
  ...props
}: Props): React.ReactElement => {
  const Calenders: Array<any> = [];
  let nowKey = '';
  let nowYearMonthKey = '';
  let nowTransactions: any = {};
  let nowSelectedDate = `${selectedDate.startDate.getFullYear()}-${
    selectedDate.startDate.getMonth() + 1
  }`;
  const endDateString = `${selectedDate.endDate.getFullYear()}-${
    selectedDate.endDate.getMonth() + 1
  }`;
  Object.entries(transactions).forEach((el) => {
    const [key, value] = el;
    const [year, month] = key.split('-');
    const yearMonthKey = `${year}-${month}`;

    nowSelectedDate = pushEmptyCalender(
      yearMonthKey,
      nowSelectedDate,
      nowTransactions,
      endDateString,
      Calenders,
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
      Calenders.push({ transactions: { ...nowTransactions }, nowYearMonthKey });
      nowYearMonthKey = yearMonthKey;
      nowKey = key;
      nowTransactions = {};

      nowSelectedDate = pushEmptyCalender(
        yearMonthKey,
        nowSelectedDate,
        nowTransactions,
        endDateString,
        Calenders,
      );
      if (nowSelectedDate === 'end') {
        return;
      }
    }
    nowTransactions[key] = value;
  });
  if (JSON.stringify(nowTransactions) !== '{}') {
    Calenders.push({ transactions: { ...nowTransactions }, nowYearMonthKey });
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
    Calenders.push({ nowYearMonthKey: `${nowSelectedDate}` });
    nowSelectedDate = nextMonth(nowSelectedDate);
  }
  const CalenderComponents = Calenders.map((el: any) => {
    return (
      <S.Calender
        key={JSON.stringify(el)}
        isSundayStart={isSundayStart}
        transactions={el.transactions}
        selectedDate={new Date(el.nowYearMonthKey)}
      />
    );
  });
  return <S.CalenderBind {...props}>{CalenderComponents}</S.CalenderBind>;
};

export default CalenderBind;
