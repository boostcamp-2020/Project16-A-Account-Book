import { makeAutoObservable, runInAction } from 'mobx';
import transactionAPI from 'apis/transaction';
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

const initDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const makeTransactionStore = () => {
  const store = {
    accountDateList: testAccountDateList,
    selectedDate: initDate,
    accountObjId: '',
    state: 'pending',
    async loadTransactions() {
      this.state = 'pending';
      try {
        const result = await transactionAPI.getTransaction(this.accountObjId, {
          ...this.selectedDate,
        });
        runInAction(() => {
          this.accountDateList = { ...result } as any;
          this.state = 'done';
        });
      } catch (err) {
        runInAction(() => {
          this.state = 'error';
        });
      }
    },
    setSelectedDate(selectedDateInput: SelectedDateType) {
      this.selectedDate = selectedDateInput;
    },

    setAccountObjId(accountObjIdInput: string) {
      this.accountObjId = accountObjIdInput;
    },
  };
  return makeAutoObservable(store);
};

export const TransactionStore = makeTransactionStore();
