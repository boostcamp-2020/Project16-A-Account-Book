import React from 'react';
import { TransactionStore } from 'stores/Transaction';
import { toJS } from 'mobx';
import * as S from './style';

export interface Props {
  isSundayStart: boolean;
  transactions?: any;
}

interface accType {
  oneDateList: {
    income: number;
    expense: number;
    date: string;
  }[];
}

const Calender = ({
  isSundayStart,
  transactions = {},
  ...props
}: Props): React.ReactElement => {
  const defaultStartDay = isSundayStart ? 0 : 1;

  const { oneDateList } = Object.entries(transactions).reduce(
    (acc: accType, el: any) => {
      const [key, value]: [string, any[]] = el;
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
  const oneDateSecond = 24 * 60 * 60 * 1000;
  const nowDate = toJS(TransactionStore.dates.startDate);
  const maxDate =
    (toJS(TransactionStore.dates.endDate).getTime() - nowDate.getTime()) /
    oneDateSecond;
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
  const oneWeekComponentList = oneWeekListData.map((el) => {
    return <S.OneWeek key={el[0].date} oneDateList={el} />;
  });

  return (
    <S.Calender {...props}>
      <S.DayBar isSundayStart={isSundayStart} />
      {oneWeekComponentList}
    </S.Calender>
  );
};

export default Calender;
