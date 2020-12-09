import React from 'react';
import { TransactionStore } from 'stores/Transaction';
import { OneDateType } from '../CalendarOneDate';
import * as S from './style';

export interface Props {
  oneDateList: OneDateType[];
  selectedDate: any;
}

interface accProps {
  dateComponentList: JSX.Element[];
  income: number;
  expense: number;
}

const getDateString = (selectedDate: Date, date: number) => {
  return `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${date}`;
};

const CalendarOneDate = ({
  oneDateList,
  selectedDate,
  ...props
}: Props): React.ReactElement => {
  const res = oneDateList.reduce(
    (acc: accProps, el) => {
      const newComponent = (
        <S.OneDate
          key={el.date}
          date={el.date}
          income={el.income}
          expense={el.expense}
          onClick={() => {
            TransactionStore.setModalVisible(true);
            TransactionStore.setModalClickDate(
              getDateString(selectedDate, el.date!),
            );
          }}
        />
      );
      return {
        dateComponentList: [...acc.dateComponentList, newComponent],
        income: acc.income + (el.income! || 0),
        expense: acc.expense + (el.expense! || 0),
      };
    },
    {
      dateComponentList: [],
      income: 0,
      expense: 0,
    },
  );

  if (oneDateList[0].date === 1) {
    new Array(7 - oneDateList.length)
      .fill(0)
      .forEach(() =>
        res.dateComponentList.unshift(<S.OneDate key={Math.random()} />),
      );
  } else {
    new Array(7 - oneDateList.length)
      .fill(0)
      .forEach(() =>
        res.dateComponentList.push(<S.OneDate key={Math.random()} />),
      );
  }

  return (
    <S.CalendarOneWeek {...props}>
      <S.PriceWrap>
        <S.IncomePriceTag value={res.income} />
        <S.ExpensePriceTag value={res.expense} />
      </S.PriceWrap>
      <S.DateWrap>{res.dateComponentList}</S.DateWrap>
    </S.CalendarOneWeek>
  );
};

export default CalendarOneDate;
