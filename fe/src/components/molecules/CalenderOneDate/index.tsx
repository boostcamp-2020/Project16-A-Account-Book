import React from 'react';
import * as S from './style';

export interface Props {
  date: number;
  income: number;
  expense: number;
  onClick: () => void;
}

const CalenderOneDate = ({
  date,
  income,
  expense,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalenderOneDate onClick={onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.IncomeText>{income}</S.IncomeText>
      <S.ExpenseText>{expense}</S.ExpenseText>
    </S.CalenderOneDate>
  );
};

export default CalenderOneDate;
