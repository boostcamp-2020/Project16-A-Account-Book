import { TransactionModel, ITransaction } from 'models/transaction';
import { AccountModel } from 'models/account';

const oneMonthTransactionsReducer = (acc: any, transaction: ITransaction) => {
  const year = transaction.date.getFullYear();
  const month = transaction.date.getMonth() + 1;
  const date = transaction.date.getDate();
  const key = `${year}-${month}-${date}`;
  return acc[key]
    ? { ...acc, [key]: [...acc[key], transaction] }
    : { ...acc, [key]: [transaction] };
};

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
