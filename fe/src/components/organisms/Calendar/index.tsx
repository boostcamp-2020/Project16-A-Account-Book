import React from 'react';
import date from 'utils/date';
import * as S from './style';

export interface Props {
  isSundayStart: boolean;
  transactions?: any;
  selectedDate: Date;
}

interface accType {
  oneDateList: {
    income: number;
    expense: number;
    date: string;
  }[];
}

const getOneWeekListData = (oneDateList: any, defaultStartDay: number) => {
  const nowDate = new Date(oneDateList[0].date);
  const maxDate = date.monthMaxDate(nowDate);
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();
  const oneWeekListData = [];
  let oneDateComponent = [];
  let oneDateListIdx = 0;
  for (let dateLoopIdx = 1; dateLoopIdx <= maxDate; dateLoopIdx += 1) {
    const nowElement = oneDateList[oneDateListIdx];
    if (nowElement) {
      const nowElementDate = nowElement.date.split('-')[2];
      if (nowElementDate === String(dateLoopIdx)) {
        oneDateComponent.push({ ...nowElement, date: dateLoopIdx });
        oneDateListIdx += 1;
      } else {
        oneDateComponent.push({ date: dateLoopIdx });
      }
    } else {
      oneDateComponent.push({ date: dateLoopIdx });
    }
    if (new Date(nowYear, nowMonth, dateLoopIdx).getDay() === defaultStartDay) {
      oneWeekListData.push(oneDateComponent);
      oneDateComponent = [];
    }
  }
  if (oneDateComponent.length !== 0) {
    oneWeekListData.push(oneDateComponent);
  }
  return oneWeekListData;
};

const getOneDateList = (transactions: any) =>
  Object.entries(transactions).reduce(
    (acc: accType, el: any) => {
      const [key, value]: [string, any[]] = el;
      if (key === 'nowYearMonthKey') {
        return acc;
      }
      const res = value.reduce(
        (acc2, els: any) => {
          if (els.category.type === 'INCOME') {
            return {
              ...acc2,
              income: acc2.income + els.price,
            };
          }
          return {
            ...acc2,
            expense: acc2.expense + els.price,
          };
        },
        {
          income: 0,
          expense: 0,
        },
      );
      return {
        ...acc,
        oneDateList: [...acc.oneDateList, { ...res, date: key }],
      };
    },
    {
      oneDateList: [],
    },
  );

const Calendar = ({
  isSundayStart,
  transactions = {},
  selectedDate,
  ...props
}: Props): React.ReactElement => {
  const defaultStartDay = isSundayStart ? 0 : 1;
  const nowYear = selectedDate.getFullYear();
  const nowMonth = selectedDate.getMonth();
  const nowYearDate = `${nowYear % 100} / ${nowMonth + 1}`;
  const nowDate = `${nowMonth + 1}`;

  if (JSON.stringify(transactions) === '{}') {
    const oneWeekListData = getOneWeekListData(
      [{ date: date.dateFormatter(selectedDate) }],
      defaultStartDay,
    );
    const oneWeekComponentList = oneWeekListData.map((el) => {
      return (
        <S.OneWeek
          key={el[0].date}
          oneDateList={el}
          selectedDate={selectedDate}
        />
      );
    });

    return (
      <S.Calendar {...props}>
        <S.DayBar isSundayStart={isSundayStart} />
        {oneWeekComponentList}
        <S.CenterMonth>
          {nowYear === new Date().getFullYear() ? nowDate : nowYearDate}
        </S.CenterMonth>
      </S.Calendar>
    );
  }
  const { oneDateList } = getOneDateList(transactions);

  const oneWeekListData = getOneWeekListData(oneDateList, defaultStartDay);

  const oneWeekComponentList = oneWeekListData.map((el) => {
    return (
      <S.OneWeek
        key={el[0].date}
        oneDateList={el}
        selectedDate={selectedDate}
      />
    );
  });

  return (
    <S.Calendar {...props}>
      <S.DayBar isSundayStart={isSundayStart} />
      {oneWeekComponentList}
      <S.CenterMonth>
        {nowYear === new Date().getFullYear() ? nowDate : nowYearDate}
      </S.CenterMonth>
    </S.Calendar>
  );
};

export default Calendar;
