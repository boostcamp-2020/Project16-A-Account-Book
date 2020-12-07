import { TransactionModel, ITransaction } from 'models/transaction';
import { AccountModel } from 'models/account';
import { getCompFuncByKey } from 'libs/utils';

const oneMonthTransactionsReducer = (acc: any, transaction: ITransaction) => {
  const year = transaction.date.getFullYear();
  const month = transaction.date.getMonth() + 1;
  const date = transaction.date.getDate();
  const key = `${year}-${month}-${date}`;
  return acc[key]
    ? { ...acc, [key]: [...acc[key], transaction] }
    : { ...acc, [key]: [transaction] };
};

export const getTransactionList = async ({
  startDate,
  endDate,
  accountObjId,
}: {
  startDate: string;
  endDate: string;
  accountObjId: string;
}) => {
  const res = await AccountModel.findOne({
    _id: accountObjId,
  })
    .populate({
      path: 'transactions',
      match: { date: { $gte: startDate, $lt: endDate } },
      populate: { path: 'category method' },
    })
    .exec();

  if (!res) {
    return [];
  }

  const trans = res.transactions;
  if (!trans || trans.length === 0) {
    return [];
  }

  trans.sort(getCompFuncByKey('date'));

  const result = (trans as ITransaction[]).reduce(
    oneMonthTransactionsReducer,
    {},
  );
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

export const getTransaction = async (transactionObjId: string) => {
  const transaction = await TransactionModel.findByPkAndPopulateAll(
    transactionObjId,
  );
  if (!transaction) {
    throw new Error();
  }
  return transaction;
};
