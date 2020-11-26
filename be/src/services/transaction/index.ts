import { TransactionModel, Transaction } from 'models/transaction';
import getOneMonthRange from 'libs/date';

export interface TransactionDBType {
  excludeFromBudget: boolean;
  _id: string;
  client: string;
  date: Date;
  memo?: string;
  method: {
    _id: string;
    title: string;
    __v?: number;
  };
  category: {
    _id: string;
    type: string;
    title: string;
    __v?: number;
  };
  price: number;
}

const oneMonthTransactionsReducer = (acc: any, transaction: Transaction) => {
  const year = transaction.date.getFullYear();
  const month = transaction.date.getMonth() + 1;
  const date = transaction.date.getDate();
  const key = `${year}-${month}-${date}`;
  if (acc[key]) {
    acc[key].push(transaction);
    return {
      ...acc,
    };
  }
  acc[key] = [transaction];
  return {
    ...acc,
  };
};
export const getTransaction = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  const oneMonthTransactions: Transaction[] = await TransactionModel.find()
    .populate('category')
    .populate('method')
    .where('date')
    .gte(new Date(getOneMonthRange(year, month).start))
    .lt(new Date(getOneMonthRange(year, month).end))
    .sort('date');

  const result = oneMonthTransactions.reduce(oneMonthTransactionsReducer, {});
  return result;
};

export const createTransaction = async ({
  client,
  date,
  memo,
  method,
  price,
  category,
  excludeFromBudget,
}: Transaction) => {
  const newTransaction = new TransactionModel({
    client,
    date,
    memo,
    method,
    category,
    price,
    excludeFromBudget,
  });
  return newTransaction.save();
};

export default {};
