import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
import { DateMoneyHeaderStyle, ReducedDate } from './style';

export interface Props {
  date: Date;
  totalPayment: number;
}

const DateMoneyHeader = ({ date, totalPayment, ...props }: Props) => {
  return (
    <DateMoneyHeaderStyle {...props}>
      <ReducedDate date={date} parseString="ymdz" />
      <PriceTag value={totalPayment} bold />
    </DateMoneyHeaderStyle>
  );
};

export default DateMoneyHeader;
