import React from 'react';
import * as S from './style';
import { TransactionDBType } from '../../stores/Transaction';

const convertTransactionDBTypetoTransactionType = (
  input: TransactionDBType[],
) => {
  return input.map((el) => {
    const { _id, category, method, ...other } = el;
    return {
      ...other,
      id: _id,
      category: category.title,
      method: method.title,
    };
  });
};

type test = [date: string, transactions: any];

const TransactionDateList = ({ list }: { list: any[] }) => {
  const mapFunc = (item: test) => {
    const [date, transactions] = item;
    return (
      <S.AccountDate
        key={date}
        date={new Date(date)}
        transactionList={convertTransactionDBTypetoTransactionType(
          transactions as [],
        )}
      />
    );
  };

  return <>{Object.entries(list).map(mapFunc)}</>;
};

export default TransactionDateList;
