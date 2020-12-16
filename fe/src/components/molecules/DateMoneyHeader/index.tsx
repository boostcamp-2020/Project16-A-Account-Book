import React from 'react';
import PriceWithSign from 'components/molecules/PriceWithSign';
import { categoryType } from 'stores/Category';
import { DateMoneyHeaderStyle, ReducedDate } from './style';

export interface Props {
  date: Date;
  totalPayment: number;
  unclassified: number;
  income: number;
  expense: number;
}

const DateMoneyHeader = ({
  date,
  totalPayment,
  unclassified,
  income,
  expense,
  ...props
}: Props) => {
  return (
    <DateMoneyHeaderStyle {...props}>
      <ReducedDate date={date} parseString="ymdz" />
      <div className="price-container">
        <PriceWithSign price={income} type={categoryType.INCOME} bold />
        <PriceWithSign price={expense} type={categoryType.EXPENSE} bold />
      </div>
    </DateMoneyHeaderStyle>
  );
};

export default DateMoneyHeader;
