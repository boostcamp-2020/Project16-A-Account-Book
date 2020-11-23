import React, { useEffect, useState } from 'react';
import { AccountDate, Header } from './style';

export interface Props {
  date: Date;
}

const App = ({ date, ...props }: Props) => {
  const [totalPayment, setTotalPayment] = useState(10000);
  useEffect(() => {
    setTotalPayment(20000);
  }, []);
  return (
    <AccountDate {...props}>
      <Header date={date} totalPayment={totalPayment} />
    </AccountDate>
  );
};

export default App;
