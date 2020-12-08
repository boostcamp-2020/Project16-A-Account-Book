import math from 'utils/math';
import { IDateTotalprice, TransactionDBType } from 'types';

export const initTotalPrice = {
  income: 0,
  expense: 0,
};

const TransactionsReduce = (
  oneDayPrice: { income: number; expense: number },
  transaction: any,
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
  return oneDayPrice;
};

export const calTotalPrices = (list: any) => {
  return Object.values<any[]>(list).reduce(
    (acc: { income: number; expense: number }, transactions) => {
      if (typeof transactions === 'string') {
        return acc;
      }
      const res = transactions.reduce(TransactionsReduce, {
        ...initTotalPrice,
      });
      return {
        income: acc.income + res.income,
        expense: acc.expense + res.expense,
      };
    },
    { ...initTotalPrice },
  );
};

export const calTotalPriceByDateAndType = (
  transactions: any,
  type: string,
): IDateTotalprice[] => {
  const totalPriceByDateList = Object.keys(transactions).reduce(
    (acc: IDateTotalprice[], date: string) => {
      const filteredTransactions = transactions[date].filter(
        (transaction: TransactionDBType) => transaction.category.type === type,
      );
      const totalPrice = math.sumByKey(filteredTransactions, 'price');
      return [...acc, { date, totalPrice }];
    },
    [],
  );
  return totalPriceByDateList;
};
