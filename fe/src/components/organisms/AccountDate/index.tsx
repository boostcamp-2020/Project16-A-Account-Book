import React, { useEffect, useState } from 'react';
import { transaction } from 'components/molecules/Transaction';
import { AccountDate, Header, AccountTransaction } from './style';

export interface Props {
  date: Date;
  transactionList: transaction[];
}

interface accType {
  transList: JSX.Element[];
  totalPrice: number;
}

const reduceTransactionList = (acc: accType, transEl: transaction) => {
  acc.transList.push(<AccountTransaction key={transEl.id} trans={transEl} />);
  acc.totalPrice += transEl.price;
  return acc;
};

const App = ({ date, transactionList, ...props }: Props) => {
  const [totalPayment, setTotalPayment] = useState(10000);
  const [transactionListComponent, setTransactionListComponent] = useState<
    JSX.Element[]
  >();

  const res = transactionList.reduce(reduceTransactionList, {
    transList: [],
    totalPrice: 0,
  });

  useEffect(() => {
    setTotalPayment(res.totalPrice);
    setTransactionListComponent(res.transList);
  }, [totalPayment]);

  return (
    <AccountDate {...props}>
      <Header date={date} totalPayment={totalPayment} />
      {transactionListComponent}
    </AccountDate>
  );
};

export default App;
