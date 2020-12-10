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

const CalendarOneDate = ({
  date,
  income,
  expense,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalendarOneDate onClick={onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.PriceTextWrap>
        <S.IncomeText>{income}</S.IncomeText>
        <S.ExpenseText>{expense}</S.ExpenseText>
      </S.PriceTextWrap>
      <S.EmptyArea />
    </S.CalendarOneDate>
  );
};

export default CalendarOneDate;
