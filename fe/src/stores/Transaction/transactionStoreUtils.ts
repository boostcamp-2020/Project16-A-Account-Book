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
  // TODO 이체 처리
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
