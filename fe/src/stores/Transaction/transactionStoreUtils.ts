import math from 'utils/math';
import {
  IDateTotalprice,
  TransactionDBType,
  IDateTransactionObj,
  ICategory,
  ICategoryStatistics,
} from 'types';
import { TransactionStore } from 'stores/Transaction';
import { categoryConvertBig2Small, categoryType } from 'stores/Category';
import dateUtil from 'utils/date';

export const initTotalPrice = {
  income: 0,
  expense: 0,
  unclassified: 0,
};

export const sumAllPricesByType = (transactions: TransactionDBType[]) => {
  return transactions.reduce((summedPriceByType, transaction) => {
    const type = categoryConvertBig2Small(transaction.classification);
    return {
      ...summedPriceByType,
      [type]: summedPriceByType[type] + transaction.price,
    };
  }, initTotalPrice);
};

export const isNotMatchedWithFilterInfo = (transaction: TransactionDBType) => {
  const { categories: caregoryFilterIds } = TransactionStore.getFilter();
  const { classification } = transaction;
  const type = categoryConvertBig2Small(classification);
  if (caregoryFilterIds[type].disabled) {
    return true;
  }
  return false;
};
export const convertTransactionDBTypetoTransactionType = (input: any[]) => {
  const output = input.reduce((acc, transaction) => {
    const { id, accountId, category, method, ...other } = transaction;
    return [
      ...acc,
      {
        ...other,
        id,
        category: category.title,
        method: method.title,
        categoryType: transaction.classification,
      },
    ];
  }, []);
  return output;
};

export const calTotalPrices = (list: IDateTransactionObj) => {
  return Object.values<TransactionDBType[]>(list).reduce(
    (acc, transactions) => {
      const summedPrices = sumAllPricesByType(transactions);
      return {
        income: acc.income + summedPrices.income,
        expense: acc.expense + summedPrices.expense,
        unclassified: acc.unclassified + summedPrices.unclassified,
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
        (transaction: TransactionDBType) => transaction.classification === type,
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

interface ITotalCategoryObj extends Omit<ICategory, '__v' | 'type'> {
  totalPrice: number;
}

interface ITotalObj {
  totalIncomeCategoryObj: {
    [title: string]: ITotalCategoryObj;
  };
  totalExpenseCategoryObj: {
    [title: string]: ITotalCategoryObj;
  };
}

export const calTotalPriceByCategories = (
  transactionList: any[],
): ITotalObj => {
  const initTotalObj = {
    totalIncomeCategoryObj: {},
    totalExpenseCategoryObj: {},
  };
  const totalPriceByCategories = transactionList.reduce(
    (prevTotalObj: any, transaction) => {
      const newTotalObj = prevTotalObj;
      const { price } = transaction;
      const { categoryId } = transaction;
      const { category } = transaction;
      if (category.type === categoryType.UNCLASSIFIED) {
        return prevTotalObj;
      }
      const typeKey =
        category.type === categoryType.EXPENSE
          ? 'totalExpenseCategoryObj'
          : 'totalIncomeCategoryObj';
      if (newTotalObj[typeKey][category.title]) {
        newTotalObj[typeKey][category.title].totalPrice += price;
      } else {
        newTotalObj[typeKey][category.title] = {
          id: categoryId,
          title: category.title,
          color: category.color,
          totalPrice: price,
        };
      }
      return newTotalObj;
    },
    initTotalObj,
  );
  return totalPriceByCategories;
};

export const addPercentAndGetArray = (
  categoryObj: { [title: string]: ITotalCategoryObj },
  totalTypePrice: number,
): ICategoryStatistics[] => {
  return Object.keys(categoryObj).map((title) => {
    return {
      ...categoryObj[title],
      percent: Math.round(
        (categoryObj[title].totalPrice / totalTypePrice) * 100,
      ),
    };
  });
};
