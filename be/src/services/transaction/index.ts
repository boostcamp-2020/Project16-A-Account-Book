import { TransactionModel, Transaction, AccountModel } from 'models/index';
import getOneMonthRange from 'libs/date';

const oneMonthTransactionsReducer = (acc: any, transaction: Transaction) => {
  const year = transaction.date.getFullYear();
  const month = transaction.date.getMonth() + 1;
  const date = transaction.date.getDate();
  const key = `${year}-${month}-${date}`;
  return acc[key]
    ? { ...acc, [key]: [...acc[key], transaction] }
    : { ...acc, [key]: [transaction] };
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

export const saveAndAddToAccount = async (
  transaction: Transaction,
  accountObjId: string,
) => {
  const { _id: transcationObjId } = await TransactionModel.create(transaction);
  return AccountModel.findByPkAndPushTransaction(
    accountObjId,
    transcationObjId,
  );
};
