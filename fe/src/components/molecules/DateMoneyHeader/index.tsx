import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
import { DateMoneyHeader, ReducedDate } from './style';

export interface Props {
  date: Date;
  totalPayment: number;
}

const App = ({ date, totalPayment, ...props }: Props) => {
  return (
    <DateMoneyHeader {...props}>
      <ReducedDate date={date} parseString="dz" />
      <PriceTag value={totalPayment} bold />
    </DateMoneyHeader>
  );
};

export default App;
