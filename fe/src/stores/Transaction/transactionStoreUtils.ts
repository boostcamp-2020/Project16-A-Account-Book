import math from 'utils/math';
import { IDateTotalprice, TransactionDBType } from 'types';
import { TransactionStore } from 'stores/Transaction';
import { categoryConvertBig2Small, categoryType } from 'stores/Category';

export const initTotalPrice = {
  income: 0,
  expense: 0,
};

const sumAllPricesByType = (
  summedPriceByType: { income: number; expense: number },
  transaction: TransactionDBType,
) => {
  const type =
    transaction.category.type === categoryType.INCOME ? 'income' : 'expense';
  return {
    ...summedPriceByType,
    [type]: summedPriceByType[type] + transaction.price,
  };
};

export const convertTransactionDBTypetoTransactionType = (input: any[]) => {
  if (typeof input === 'string') {
    return [{ id: 'noId', category: 'nocategory', method: 'nomethod' }];
  }
  return input.reduce((acc, cur) => {
    const { _id, category, method, ...other } = cur;
    if (TransactionStore.isFiltered) {
      const { methods, categories } = TransactionStore.getFilter();

      const { type } = category;
      const key = categoryConvertBig2Small(type);
      if (!methods.some((x: string) => x === method._id)) return acc;
      if (categories[key].disabled) return acc;
      if (!categories[key].list.some((x: string) => x === category._id))
        return acc;
    }
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

export const calTotalPrices = (list: {
  [key: string]: TransactionDBType[];
}) => {
  return Object.values<TransactionDBType[]>(list).reduce(
    (acc: { income: number; expense: number }, transactions) => {
      const res = transactions.reduce(sumAllPricesByType, {
        ...initTotalPrice,
      });
      return {
        income: acc.income + res.income,
        expense: acc.expense + res.expense,
      };
    },
    { ...initTotalPrice },
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
