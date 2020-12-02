import React from 'react';
import { OneDateType } from '../CalenderOneDate';
import * as S from './style';

export interface Props {
  oneDateList: OneDateType[];
}

interface accProps {
  dateComponentList: JSX.Element[];
  income: number;
  expense: number;
}

const CalenderOneDate = ({
  oneDateList,
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
            alert('click!');
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
    <S.CalenderOneWeek {...props}>
      <S.DateWrap>{res.dateComponentList}</S.DateWrap>
      <S.PriceWrap>
        <S.PriceTag value={res.income} />
        <S.PriceTag value={res.expense} />
      </S.PriceWrap>
    </S.CalenderOneWeek>
  );
};

export default CalenderOneDate;
