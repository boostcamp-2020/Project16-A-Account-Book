import axios from 'apis/axios';
import urls from 'apis/urls';
import { makeAutoObservable } from 'mobx';
import { testAccountDateList } from './testData';

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

interface SelectedDateType {
  year: number;
  month: number;
}

const initSelectedDate = {
  year: 2020,
  month: 11,
};

const makeTransactionStore = () => {
  const store = {
    selectedDate: initSelectedDate,
    accountObjId: 'test',
    accountDateList: testAccountDateList,
    async loadTransactions() {
      const queryString = `?year=${this.selectedDate.year}&month=${this.selectedDate.month}`;
      const result = await axios.get(
        `${urls.transaction(this.accountObjId)}${queryString}`,
      );
      this.accountDateList = { ...result } as any;
    },
    changeSelectedDate(selectedDateInput: SelectedDateType) {
      this.selectedDate = selectedDateInput;
      this.loadTransactions();
    },
    changeAccountObj(accountObjIdInput: string) {
      this.accountObjId = accountObjIdInput;
      this.loadTransactions();
    },
  };
  store.loadTransactions();
  return makeAutoObservable(store);
};

export const TransactionStore = makeTransactionStore();
