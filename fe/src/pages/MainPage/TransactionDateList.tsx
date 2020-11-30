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

const TransactionsReduce = (
  oneDayPrice: { income: number; expense: number },
  transaction: TransactionDBType,
) => {
  if (transaction.category.type === 'INCOME') {
    return {
      ...oneDayPrice,
      income: oneDayPrice.income + transaction.price,
    };
  }
  if (transaction.category.type === 'EXPENSE') {
    return {
      ...oneDayPrice,
      expense: oneDayPrice.expense + transaction.price,
    };
  }
  // TODO 이체 처리
  return {
    ...oneDayPrice,
  };
};

export const calTotalPrices = (list: any) => {
  return Object.values<TransactionDBType[]>(list).reduce(
    (acc: { income: number; expense: number }, transactions) => {
      const res = transactions.reduce(TransactionsReduce, {
        income: 0,
        expense: 0,
      });
      return {
        income: acc.income + res.income,
        expense: acc.expense + res.expense,
      };
    },
    {
      income: 0,
      expense: 0,
    },
  );
};

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
