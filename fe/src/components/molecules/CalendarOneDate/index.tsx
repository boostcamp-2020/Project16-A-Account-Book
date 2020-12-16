import React from 'react';
import * as S from './style';

export interface OneDateType {
  date?: number;
  income?: number;
  expense?: number;
  unclassified?: number;
}
export interface Props extends OneDateType {
  onClick?: () => void;
}

const CalendarOneDate = ({
  date,
  income,
  expense,
  unclassified,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalendarOneDate onClick={(income || expense) && onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.PriceTextWrap>
        <S.IncomeText>{income && `${income}`}</S.IncomeText>
        <S.ExpenseText>{expense && `${expense}`}</S.ExpenseText>
        <S.UnclassifiedText>
          {unclassified && `${unclassified}`}
        </S.UnclassifiedText>
      </S.PriceTextWrap>
      <S.EmptyArea />
    </S.CalendarOneDate>
  );
};

export default CalendarOneDate;
