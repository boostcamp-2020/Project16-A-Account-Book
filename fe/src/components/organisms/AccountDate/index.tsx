import React from 'react';
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
  const { transList, totalPrice } = transactionList.reduce(
    reduceTransactionList,
    {
      transList: [],
      totalPrice: 0,
    },
  );

  return (
    <AccountDate {...props}>
      <Header date={date} totalPayment={totalPrice} />
      {transList}
    </AccountDate>
  );
};

export default App;
