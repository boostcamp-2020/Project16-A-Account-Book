export default {};

export const filterTransactionByType = (
  transactions: Array<any>,
  type: string,
) => transactions.filter((transaction) => transaction.category.type === type);
