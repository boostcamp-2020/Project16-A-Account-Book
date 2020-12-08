import React from 'react';
import * as S from './style';

export interface Props {
  date: Date;
  transactionList: any[];
  onClick: any;
}

interface accType {
  transList: JSX.Element[];
  totalPrice: number;
}

const TransactionList = ({ date, transactionList, onClick }: Props) => {
  const reduceTransactionList = (acc: accType, transEl: any) => {
    acc.transList.push(
      <S.AccountTransaction
        key={transEl.id}
        trans={transEl}
        onClick={onClick}
      />,
    );
    acc.totalPrice += transEl.price;
    return acc;
  };

  const { transList, totalPrice } = transactionList.reduce(
    reduceTransactionList,
    {
      transList: [],
      totalPrice: 0,
    },
  );

  return (
    <S.TransactionList>
      <S.Header date={date} totalPayment={totalPrice} />
      {transList}
    </S.TransactionList>
  );
};

export default TransactionList;
