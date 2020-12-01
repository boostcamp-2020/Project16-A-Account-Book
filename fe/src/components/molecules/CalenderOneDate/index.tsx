import React from 'react';
import * as S from './style';

export interface OneDateType {
  date?: number;
  income?: number;
  expense?: number;
}
export interface Props extends OneDateType {
  onClick?: () => void;
}

const CalenderOneDate = ({
  date,
  income,
  expense,
  onClick,
  ...props
}: Props): React.ReactElement => {
  if (!date && !income && !expense) {
    return <S.CalenderOneDate onClick={onClick} {...props} />;
  }
  return (
    <S.CalenderOneDate onClick={onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.IncomeText>{income}</S.IncomeText>
      <S.ExpenseText>{expense}</S.ExpenseText>
    </S.CalenderOneDate>
  );
};

export default CalenderOneDate;
