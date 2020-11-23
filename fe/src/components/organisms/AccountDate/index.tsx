import React, { useEffect, useState } from 'react';
import { transaction } from 'components/molecules/Transaction';
import { AccountDate, Header, AccountTransaction } from './style';

export interface Props {
  date: Date;
  transactionList: transaction[];
}

const App = ({ date, transactionList, ...props }: Props) => {
  const [totalPayment, setTotalPayment] = useState(10000);

  let totalPay = 0;
  const transactionListComponent = transactionList.map((transEl) => {
    totalPay += transEl.price;
    return <AccountTransaction key={transEl.id} trans={transEl} />;
  });

  useEffect(() => {
    setTotalPayment(totalPay);
  }, [totalPayment]);

  return (
    <AccountDate {...props}>
      <Header date={date} totalPayment={totalPayment} />
      {transactionListComponent}
    </AccountDate>
  );
};

export default App;
