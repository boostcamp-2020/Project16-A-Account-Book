import React from 'react';
import AccountDate from 'components/organisms/AccountDate';
import { TransactionDBType } from 'stores/Transaction';

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

type TransactionDBKeyValue = [date: string, transactions: any];

const TransactionDateList = ({ list }: { list: any }) => {
  const mapFunc = (item: TransactionDBKeyValue) => {
    const [date, transactions] = item;
    return (
      <AccountDate
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
