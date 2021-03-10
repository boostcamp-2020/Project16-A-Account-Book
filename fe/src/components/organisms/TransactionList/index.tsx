import React from 'react';
import { categoryConvertBig2Small as convert } from 'stores/Category';
import * as S from './style';

export interface Props {
  date: Date;
  transactionList: any[];
  onClick: any;
}

interface accType {
  transList: JSX.Element[];
  totalPrice: number;
  income: number;
  expense: number;
  unclassified: number;
}

const TransactionList = ({ date, transactionList, onClick }: Props) => {
  const reduceTransactionList = (acc: accType, transEl: any) => {
    console.log(acc);
    acc.transList.push(
      <S.AccountTransaction
        key={transEl.id}
        trans={transEl}
        onClick={onClick}
      />,
    );
    acc.totalPrice += transEl.price;
    acc[convert(transEl.categoryType)] += transEl.price;
    return acc;
  };

  const {
    transList,
    totalPrice,
    income,
    expense,
    unclassified,
  } = transactionList.reduce(reduceTransactionList, {
    transList: [],
    totalPrice: 0,
    income: 0,
    expense: 0,
    unclassified: 0,
  });

  return (
    <S.TransactionList>
      <S.Header
        date={date}
        totalPayment={totalPrice}
        income={income}
        expense={expense}
        unclassified={unclassified}
      />
      {transList}
    </S.TransactionList>
  );
};

export default TransactionList;
