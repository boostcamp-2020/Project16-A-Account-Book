import { toJS, observable, makeObservable, computed } from 'mobx';
import axios from 'apis/axios';
import urls from 'apis/urls';
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
  selectedDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };

  accountObjId = 'test';

  accountDateList: any = testAccountDateList;

  constructor() {
    makeObservable(this, {
      accountObjId: observable,
      accountDateList: observable,
      totalPrices: computed,
    });

    this.loadTransactions();
  }

  async loadTransactions() {
    const queryString = `?year=${this.selectedDate.year}&month=${this.selectedDate.month}`;
    const result = await axios.get(
      `${urls.transaction(this.accountObjId)}${queryString}`,
    );
    this.accountDateList = result;
  }

  get year() {
    return this.selectedDate.year;
  }

  get month() {
    return this.selectedDate.month;
  }

  set date({ year, month }: { year: number; month: number }) {
    this.selectedDate.year = year;
    this.selectedDate.month = month;
  }

  get totalPrices() {
    return Object.entries(toJS(this.accountDateList)).reduce(
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
