import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
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
      <PriceTag value={totalPayment} bold />
    </DateMoneyHeaderStyle>
  );
};

export default DateMoneyHeader;
