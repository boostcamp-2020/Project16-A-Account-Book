import React from 'react';
import * as S from './style';

export interface Props {
  date: Date;
  transactionList: any[];
}

interface accType {
  transList: JSX.Element[];
  totalPrice: number;
}

const reduceTransactionList = (acc: accType, transEl: any) => {
  acc.transList.push(<S.AccountTransaction key={transEl.id} trans={transEl} />);
  acc.totalPrice += transEl.price;
  return acc;
};

const AccountDate = ({ date, transactionList }: Props) => {
  const { transList, totalPrice } = transactionList.reduce(
    reduceTransactionList,
    {
      transList: [],
      totalPrice: 0,
    },
  );

  return (
    <S.AccountDate>
      <S.Header date={date} totalPayment={totalPrice} />
      {transList}
    </S.AccountDate>
  );
};

export default AccountDate;
