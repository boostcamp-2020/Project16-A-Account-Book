import { makeAutoObservable, runInAction, toJS } from 'mobx';
import transactionAPI from 'apis/transaction';
import date from 'utils/date';
import { categoryType } from 'stores/Category';
import * as types from 'types';
import {
  calTotalPrices,
  convertTransactionDBTypetoTransactionType,
  calTotalPriceByDateAndType,
  sumAllPricesByType,
  filterList,
  calTotalPriceByCategories,
  addPercentAndGetArray,
} from 'stores/Transaction/transactionStoreUtils';

export interface ITransactionStore {
  transactions: types.IDateTransactionObj;
  dates: {
    startDate: Date;
    endDate: Date;
  };
  filter: {
    methods: types.ICheckMethod[];
    categories: {
      income: types.IFilterCategory;
      expense: types.IFilterCategory;
      unclassified: types.IFilterCategory;
    };
  };
  isCalendarModalOpen: boolean;
  modalDate: Date;
}

const oneMonthDate = date.getOneMonthRange();

const initialState: ITransactionStore = {
  transactions: {},

  dates: {
    startDate: oneMonthDate.startDate,
    endDate: oneMonthDate.endDate,
  },
  isCalendarModalOpen: false,
  modalDate: new Date(),
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
      unclassified: {
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

const fetchDate = () => {
  const session = window.sessionStorage.getItem('filter');
  if (session) {
    const convert = JSON.parse(session);
    return {
      startDate: new Date(convert.dates.startDate),
      endDate: new Date(convert.dates.endDate),
    };
  }
  return initialState.dates;
};
const fetchFilter = () => {
  const session = window.sessionStorage.getItem('filter');
  if (session) {
    const convert = JSON.parse(session);
    return {
      categories: convert.categories,
      methods: convert.methods,
    };
  }
  return initialState.filter;
};
export const TransactionStore = makeAutoObservable({
  transactions: {},
  dates: fetchDate(),
  filter: fetchFilter(),
  isFiltered: !!window.sessionStorage.getItem('filter'),
  state: state.PENDING,
  accountObjId: '',
  isCalendarModalOpen: initialState.isCalendarModalOpen,
  modalClickDate: initialState.modalDate,

  setAccountObjId(objId: string) {
    this.accountObjId = objId;
  },
  setFilter(
    startDate: Date,
    endDate: Date,
    filter?: ITransactionStore['filter'] | null,
  ) {
    this.dates = { startDate, endDate };
    if (filter) {
      this.filter = filter;
    }
  },
  resetFilter() {
    sessionStorage.removeItem('filter');
    this.setFilter(
      initialState.dates.startDate,
      initialState.dates.endDate,
      initialState.filter,
    );
    this.isFiltered = false;
  },
  getFilter() {
    return toJS(this.filter);
  },
  getOriginDates() {
    return toJS(this.dates);
  },
  setModalVisible(modalState: boolean) {
    this.isCalendarModalOpen = modalState;
  },

  setModalClickDate(dateString: string) {
    this.modalClickDate = new Date(dateString);
  },

  get clickedModalTransactionList() {
    const dateString = date.dateCustomFormatter(
      this.modalClickDate,
      'YYYY-M-D',
    );
    const res = toJS(this.transactions[dateString]);

    if (!res) return [];
    return convertTransactionDBTypetoTransactionType(res);
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
  get totalPrices(): { income: number; expense: number } {
    return this.isFiltered
      ? sumAllPricesByType(this.filteredTransactionList)
      : calTotalPrices(this.getTransactions());
  },
  get totalPricesExceptFilterAndUnclassified() {
    return calTotalPrices(this.getTransactions());
  },
  get filteredTransactionList(): types.TransactionDBType[] {
    if (!this.isFiltered) return [];
    return filterList(this.transactionList);
  },
  get transactionList(): types.TransactionDBType[] {
    const transactionList = Object.values<types.TransactionDBType[]>(
      this.getTransactions(),
    ).reduce((appendedList, list) => [...appendedList, ...list], []);
    return transactionList;
  },
  get pieChartStatistics(): types.IStatistics {
    const totalPrice = this.totalPricesExceptFilterAndUnclassified;
    const totalCategoryObj = calTotalPriceByCategories(this.transactionList);
    const incomeCategories = addPercentAndGetArray(
      totalCategoryObj.totalIncomeCategoryObj,
      totalPrice.income,
    );
    const expenseCategories = addPercentAndGetArray(
      totalCategoryObj.totalExpenseCategoryObj,
      totalPrice.expense,
    );
    return { totalPrice, incomeCategories, expenseCategories };
  },
  getTransactions(): types.IDateTransactionObj {
    return toJS(this.transactions);
  },
  async loadTransactions() {
    this.state = state.PENDING;
    try {
      const result = await transactionAPI.getTransactionList(
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
