import { observable, makeObservable, computed } from 'mobx';
import { testAccountDateList } from './testData';

interface PricesType {
  income: number;
  expense: number;
}

export type AccountDateType = {
  date: number;
  transactionList: [];
};

export interface TransactionType {
  id: string;
  icon?: string;
  date: Date;
  client: string;
  memo?: string;
  category: string;
  method: string;
  price: number;
}

export interface TransactionDBType {
  excludeFromBudget: boolean;
  _id: string;
  client: string;
  date: Date;
  memo?: string;
  method: {
    _id: string;
    title: string;
    __v?: number;
  };
  category: {
    _id: string;
    type: string;
    title: string;
    __v?: number;
  };
  price: number;
}

class Transaction {
  date = new Date('2020-11');

  accountDateList: any = testAccountDateList;

  constructor() {
    makeObservable(this, {
      date: observable,
      accountDateList: observable,
      totalPrices: computed,
    });
  }

  get year() {
    return this.date.getFullYear();
  }

  get month() {
    return this.date.getMonth() + 1;
  }

  get totalPrices() {
    return Object.entries(this.accountDateList).reduce(
      (totalPrices: PricesType, [, oneAccountDate]) => {
        const res = (oneAccountDate as []).reduce(
          (subPrices: PricesType, transaction: any) => {
            if (transaction.category.type === 'INCOME') {
              return {
                ...subPrices,
                income: subPrices.income + transaction.price,
              };
            }
            if (transaction.category.type === 'EXPENSE') {
              return {
                ...subPrices,
                expense: subPrices.expense + transaction.price,
              };
            }
            return subPrices;
          },
          { income: 0, expense: 0 },
        );

        return {
          income: totalPrices.income + res.income,
          expense: totalPrices.expense + res.expense,
        };
      },
      { income: 0, expense: 0 },
    );
  }
}

export const transactionStore = new Transaction();
