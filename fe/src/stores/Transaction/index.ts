import { makeAutoObservable, runInAction, toJS } from 'mobx';
import transactionAPI from 'apis/transaction';
import date from 'utils/date';
import { categoryType } from 'stores/Category';
import * as types from 'types';
import {
  calTotalPrices,
  calTotalPriceByDateAndType,
} from 'stores/Transaction/transactionStoreUtils';
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

const oneMonthDate = date.getOneMonthRange(
  String(new Date().getFullYear()),
  String(new Date().getMonth() + 1),
);

const initialState: ITransactionStore = {
  transactions: testAccountDateList,
  dates: {
    startDate: oneMonthDate.startDate,
    endDate: oneMonthDate.endDate,
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

export const state = {
  PENDING: 'PENDING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export const TransactionStore = makeAutoObservable({
  transactions: [] as any,
  dates: initialState.dates,
  filter: initialState.filter,
  state: state.PENDING,
  accountObjId: '-1',
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
  getDates() {
    return {
      startDate: date.dateFormatter(this.dates.startDate),
      endDate: date.dateFormatter(this.dates.endDate),
    };
  },
  get totalExpensePriceByDate() {
    return calTotalPriceByDateAndType(this.transactions, categoryType.EXPENSE);
  },
  get totalPrices() {
    if (this.state === state.PENDING) {
      // TODO PENDING 일 때 0,0을 보여주면 잠시 깜빡거림
      // 로딩관련 글씨를 보여주면 좋을 듯
      return { income: 0, expense: 0 };
    }
    return calTotalPrices(this.transactions);
  },
  async loadTransactions() {
    this.state = state.PENDING;
    try {
      const result = await transactionAPI.getTransaction(
        this.accountObjId,
        this.getDates(),
      );
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
  getAccountId() {
    return toJS(this.accountObjId);
  },
});
