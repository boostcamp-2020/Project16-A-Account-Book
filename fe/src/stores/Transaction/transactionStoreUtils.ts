import math from 'utils/math';
import { IDateTotalprice, TransactionDBType, IDateTransactionObj } from 'types';
import { TransactionStore } from 'stores/Transaction';
import { categoryConvertBig2Small, categoryType } from 'stores/Category';
import dateUtil from 'utils/date';

export const initTotalPrice = {
  income: 0,
  expense: 0,
};

export const sumAllPricesByType = (transactions: TransactionDBType[]) => {
  return transactions.reduce((summedPriceByType, transaction) => {
    const type =
      transaction.category.type === categoryType.INCOME ? 'income' : 'expense';
    return {
      ...summedPriceByType,
      [type]: summedPriceByType[type] + transaction.price,
    };
  }, initTotalPrice);
};

export const isNotMatchedWithFilterInfo = (transaction: TransactionDBType) => {
  const {
    methods: methodFilterIds,
    categories: caregoryFilterIds,
  } = TransactionStore.getFilter();
  const { category, method } = transaction;
  const type = categoryConvertBig2Small(category.type);
  if (caregoryFilterIds[type].disabled) {
    return true;
  }
  if (!caregoryFilterIds[type].list.some((id: string) => id === category._id)) {
    return true;
  }
  if (!methodFilterIds.some((id: string) => id === method._id)) {
    return true;
  }
  return false;
};
export const convertTransactionDBTypetoTransactionType = (input: any[]) => {
  return input.reduce((acc, transaction) => {
    const { _id, category, method, ...other } = transaction;
    return [
      ...acc,
      {
        ...other,
        id: _id,
        category: category.title,
        method: method.title,
      },
    ];
  }, []);
};

export const calTotalPrices = (list: IDateTransactionObj) => {
  return Object.values<TransactionDBType[]>(list).reduce(
    (acc: { income: number; expense: number }, transactions) => {
      const summedPrices = sumAllPricesByType(transactions);
      return {
        income: acc.income + summedPrices.income,
        expense: acc.expense + summedPrices.expense,
      };
    },
    initTotalPrice,
  );
};

export const calTotalPriceByDateAndType = (
  transactions: any,
  type: string,
): IDateTotalprice[] => {
  const totalPriceByDateList = Object.keys(transactions).reduce(
    (acc: IDateTotalprice[], date: string) => {
      const filteredTransactions = transactions[date].filter(
        (transaction: TransactionDBType) => transaction.category.type === type,
      );
      const totalPrice = math.sumByKey(filteredTransactions, 'price');
      return [...acc, { date, totalPrice }];
    },
    [],
  );
  return totalPriceByDateList;
};

export const filterList = (
  transactionList: TransactionDBType[],
): TransactionDBType[] => {
  const { startDate, endDate } = TransactionStore.getOriginDates();

  return transactionList.filter(
    (transaction: TransactionDBType) =>
      dateUtil.isDateInDateRange(transaction.date, startDate, endDate) &&
      !isNotMatchedWithFilterInfo(transaction),
  );
};
