import { TransactionModel, ITransaction } from 'models/transaction';
import { AccountModel } from 'models/account';
import { getCompFuncByKey } from 'libs/utils';
import { ITotalPrice } from 'services/category/index.type';

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
  const transactionList = await AccountModel.findAllTransactionExceptDeleted(
    accountObjId,
    startDate,
    endDate,
  );
  return transactionList;
};

export const sortAndGroupByDate = (transactionList: ITransaction[]) => {
  transactionList.sort(getCompFuncByKey('date'));
  const groupedByDateTransactionList = transactionList.reduce(
    oneMonthTransactionsReducer,
    {},
  );
  return groupedByDateTransactionList;
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

export const updateTransaction = async (
  transactionObjId: string,
  transaction: ITransaction,
) => {
  const conditions = { _id: transactionObjId, isDeleted: false };
  return TransactionModel.findOneAndUpdate(conditions, transaction).exec();
};

export const deleteTransaction = async (transactionObjId: string) => {
  const conditions = { _id: transactionObjId, isDeleted: false };
  return TransactionModel.findOneAndUpdate(conditions, {
    isDeleted: true,
  }).exec();
};
