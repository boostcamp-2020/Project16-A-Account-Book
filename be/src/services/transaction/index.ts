import { getCompFuncByKey } from 'libs/utils';
import { Op } from 'sequelize';

const models = require('models');

const typeMap = (type: any) => {
  if(type == '수입') return 'INCOME'
  return 'EXPENSE';
}

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
    include: [
      {
        model: models.Category,
        attributes: ['id','type','title','color']
      },
      {
        model: models.Method,
        attributes: ['id','title']
      }
    ],
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

export const saveAndAddToAccount = async (transaction: any, accountId: string) => {
  let category = await models.Category.findOne({
    attributes:  ['id'],
    where:{
      title: transaction.category,
      accountId
    }
  });
  let method = await models.Method.findOne({
    attributes:  ['id'],
    where: {
      title: transaction.method,
      accountId
    }
  });
  transaction.accountId = accountId;
  transaction.categoryId = category.id;
  transaction.methodId = method.id;
  transaction.classification = typeMap(transaction.classification);
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
  transaction.methodId = Number(transaction.method);
  transaction.categoryId = Number(transaction.category);
  console.log(transaction);
  return models.Transaction.update(transaction, {
    where: { id: transactionObjId },
  });
};

export const deleteTransaction = async (transactionObjId: string) => {
  return models.Transaction.destroy({ where: { id: transactionObjId } });
};
