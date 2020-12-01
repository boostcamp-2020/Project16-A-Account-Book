import React from 'react';
import { OneDateType } from '../CalenderOneDate';
import * as S from './style';

export interface Props {
  oneDateList: OneDateType[];
}

interface accProps {
  DateComponentList: JSX.Element[];
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
          date={el.date}
          income={el.income}
          expense={el.expense}
          onClick={() => {
            alert('click!');
          }}
        />
      );
      return {
        DateComponentList: [...acc.DateComponentList, newComponent],
        income: acc.income + el.income!,
        expense: acc.expense + el.expense!,
      };
    },
    {
      DateComponentList: [],
      income: 0,
      expense: 0,
    },
  );

  if (oneDateList[0].date === 1) {
    new Array(7 - oneDateList.length)
      .fill(0)
      .forEach(() => res.DateComponentList.unshift(<S.OneDate />));
  } else {
    new Array(7 - oneDateList.length)
      .fill(0)
      .forEach(() => res.DateComponentList.push(<S.OneDate />));
  }

  return (
    <S.CalenderOneWeek {...props}>
      <S.DateWrap>{res.DateComponentList}</S.DateWrap>
      <S.PriceWrap>
        <S.PriceTag value={res.income} />
        <S.PriceTag value={res.expense} />
      </S.PriceWrap>
    </S.CalenderOneWeek>
  );
};

export default CalenderOneDate;
