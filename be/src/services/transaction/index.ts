import { TransactionModel, ITransaction } from 'models/transaction';
import { AccountModel } from 'models/account';
import { categoryType } from 'models/category';

const oneMonthTransactionsReducer = (acc: any, transaction: ITransaction) => {
  const year = transaction.date.getFullYear();
  const month = transaction.date.getMonth() + 1;
  const date = transaction.date.getDate();
  const key = `${year}-${month}-${date}`;
  return acc[key]
    ? { ...acc, [key]: [...acc[key], transaction] }
    : { ...acc, [key]: [transaction] };
};

const sumPricesByType = (transactions: Array<any>) => {
  const initTotalPrice = { income: 0, expense: 0 };
  const totalPrice = transactions.reduce((sumPrice, transaction) => {
    if (transaction.category.type === categoryType.EXPENSE) {
      return { ...sumPrice, expense: sumPrice.expense + transaction.price };
    }
    return { ...sumPrice, income: sumPrice.income + transaction.price };
  }, initTotalPrice);
  return totalPrice;
};

const sumPricesByCategory = (transactions: Array<any>) => {};
export const getTransaction = async ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const oneMonthTransactions: ITransaction[] = await TransactionModel.find()
    .populate('category')
    .populate('method')
    .where('date')
    .gte(new Date(startDate))
    .lt(new Date(endDate))
    .sort('date');

  const result = oneMonthTransactions.reduce(oneMonthTransactionsReducer, {});
  return result;
};

export const saveAndAddToAccount = async (
  transaction: ITransaction,
  accountObjId: string,
) => {
  const { _id: transcationObjId } = await TransactionModel.create(transaction);
  return AccountModel.findByPkAndPushTransaction(
    accountObjId,
    transcationObjId,
  );
};
export const getCategoryStatistics = async (
  accountObjId: string,
  startDate: string,
  endDate: string,
) => {
  const transactions = await AccountModel.findByPkAndGetTransCategory(
    accountObjId,
    startDate,
    endDate,
  );
  const totalPrice = sumPricesByType(transactions);
  const categories = sumPricesByCategory(transactions);
  return { totalPrice };
};
