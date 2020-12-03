import { TransactionModel, ITransaction } from 'models/transaction';
import { AccountModel } from 'models/account';

const findTransactionsAndBindWithDateKey = (
  startDate: string,
  endDate: string,
) => async (acc: any, transactionId: string) => {
  const res = await TransactionModel.findOne({ _id: transactionId })
    .populate('category')
    .populate('method')
    .where('date')
    .gte(new Date(startDate))
    .lt(new Date(endDate));
  if (!res) {
    return acc;
  }
  const resDate = res.date;
  const resKey = `${resDate.getFullYear()}-${
    resDate.getMonth() + 1
  }-${resDate.getDate()}`;

  if (acc[resKey]) {
    return acc[resKey].push(res);
  }
  acc[resKey] = res;
  return { ...acc };
};

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
      populate: { path: 'category methods' },
    })
    .exec();

  if (!res) {
    return { message: 'nodata' };
  }

  const trans = await res.transactions;
  if (!trans || trans.length === 0) {
    return { message: 'nodata' };
  }

  trans.sort((firstEl: any, secondEl: any) => {
    return firstEl.date - secondEl.date;
  });

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

export const getTotalPriceByClassification = async (
  accountObjId: string,
  startDate: string,
  endDate: string,
) => {
  const transactionsInDateRange = await AccountModel.findById(
    accountObjId,
    'transactions',
  )
    .populate({
      path: 'transactions',
      match: { date: { $gte: startDate, $lt: endDate } },
      select: 'price category date',
      populate: { path: 'category', select: 'type' },
    })
    .exec();

  return transactionsInDateRange;
};
