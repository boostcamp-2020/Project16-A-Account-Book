import { TransactionDBType } from 'stores/Transaction';

export const initTotalPrice = {
  income: 0,
  expense: 0,
};

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
  return oneDayPrice;
};

export const calTotalPrices = (list: any) => {
  return Object.values<TransactionDBType[]>(list).reduce(
    (acc: { income: number; expense: number }, transactions) => {
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
