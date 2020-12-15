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
      <div className="price-container">
        <div className="price-container__price price-container__price--income">
          {income === 0 ? '' : `+`}
          <PriceTag value={income} bold color="selectedBlue" />
        </div>
        <div className="price-container__price price-container__price--expense">
          {expense === 0 ? '' : '-'}
          <PriceTag value={expense} bold color="red" />
        </div>
      </div>
    </DateMoneyHeaderStyle>
  );
};

export default DateMoneyHeader;
