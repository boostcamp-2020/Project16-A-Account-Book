import React, { useState, useEffect } from 'react';
import { TransactionType } from 'stores/Transaction';
import { AccountDate, Header, AccountTransaction } from './style';

export interface Props {
  date: Date;
  transactionList: TransactionType[];
}

interface accType {
  transList: JSX.Element[];
  totalPrice: number;
}

const reduceTransactionList = (acc: accType, transEl: TransactionType) => {
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
  }, []);

  return (
    <AccountDate {...props}>
      <Header date={date} totalPayment={totalPayment} />
      {transactionListComponent}
    </AccountDate>
  );
};

export default App;
