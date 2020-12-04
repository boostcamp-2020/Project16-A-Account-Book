import { makeAutoObservable, runInAction } from 'mobx';
import transactionAPI from 'apis/transaction';
import date from 'utils/date';
import * as types from 'types';
import { testAccountDateList } from './testData';

export interface ITransactionStore {
  transactions: any;
  dates: {
    startDate: Date;
    endDate: Date;
  };
  filter: {
    methods: types.ICheckMethod[];
    categories: {
      income: types.IFilterCategory;
      expense: types.IFilterCategory;
    };
  };
}

const { start, end } = date.getOneMonthRange(
  String(new Date().getFullYear()),
  String(new Date().getMonth() + 1),
);

const initialState: ITransactionStore = {
  transactions: testAccountDateList,
  dates: {
    startDate: new Date(start),
    endDate: new Date(end),
  },
  filter: {
    methods: [],
    categories: {
      income: {
        disabled: false,
        list: [],
      },
      expense: {
        disabled: false,
        list: [],
      },
    },
  },
};

const state = {
  PENDING: 'PENDING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export const TransactionStore = makeAutoObservable({
  transactions: { message: 'nodata' } as any,
  dates: initialState.dates,
  filter: initialState.filter,
  state: state.PENDING,
  accountObjId: '',
  setAccountObjId(objId: string) {
    this.accountObjId = objId;
  },
  setFilter(
    startDate: Date,
    endDate: Date,
    filter: ITransactionStore['filter'] | null,
  ) {
    this.dates = { startDate, endDate };
    if (filter) {
      this.filter = filter;
    }
  },
  async loadTransactions() {
    this.state = state.PENDING;
    try {
      const result = await transactionAPI.getTransaction(this.accountObjId, {
        startDate: date.dateFormatter(this.dates.startDate),
        endDate: date.dateFormatter(this.dates.endDate),
      });
      runInAction(() => {
        this.transactions = result;
        this.state = state.DONE;
      });
    } catch (err) {
      runInAction(() => {
        this.state = state.ERROR;
      });
    }
  },
});
