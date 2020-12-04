export const filterTransactionByType = (
  transactions: Array<any>,
  type: string,
) => transactions.filter((transaction) => transaction.category.type === type);

export const getCompFuncByKey = (key: string, ascending = true) => {
  return (a: any, b: any): number => (a[key] - b[key]) * (ascending ? 1 : -1);
};
