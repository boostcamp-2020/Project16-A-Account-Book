import { getCompFuncByKey } from 'libs/utils';
import { Op } from 'sequelize';

const models = require('models');

const oneMonthTransactionsReducer = (acc: any, transaction: any) => {
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
  const transactionList = await models.Transaction.findAll({
    where: {
      accountId: accountObjId,
      date: {
        [Op.between]: [startDate, endDate],
      },
    },
  });
  return transactionList;
};

export const sortAndGroupByDate = (transactionList: any[]) => {
  transactionList.sort(getCompFuncByKey('date'));
  const groupedByDateTransactionList = transactionList.reduce(
    oneMonthTransactionsReducer,
    {},
  );
  return groupedByDateTransactionList;
};

export const saveAndAddToAccount = async (transaction: any) => {
  return models.Transaction.create(transaction);
};

export const getTransaction = async (transactionObjId: string) => {
  const transaction = await models.Transaction.findOne({
    where: { id: transactionObjId },
  });
  if (!transaction) {
    throw new Error();
  }
  return transaction;
};

export const updateTransaction = async (
  transactionObjId: string,
  transaction: any,
) => {
  return models.Transaction.update(transaction, {
    where: { id: transactionObjId },
  });
};

export const deleteTransaction = async (transactionObjId: string) => {
  return models.Transaction.destroy({ where: { id: transactionObjId } });
};
