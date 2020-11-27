import React, { ReactElement } from 'react';
import { useLocalStore } from 'mobx-react';
import axios from 'apis/axios';
import urls from 'apis/urls';
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

interface ChildrenTypes {
  children: ReactElement | ReactElement[];
}

export const TransactionStoreContext = React.createContext<any>({});

export const TransactionStoreProvider = ({ children }: ChildrenTypes) => {
  const initSelectedDate = {
    year: 2020,
    month: 11,
  };

  const store = useLocalStore(() => ({
    selectedDate: initSelectedDate,
    accountObjId: 'test',
    accountDateList: testAccountDateList as {},
    loadTransactions: async () => {
      const queryString = `?year=${store.selectedDate.year}&month=${store.selectedDate.month}`;
      const result = await axios.get(
        `${urls.transaction(store.accountObjId)}${queryString}`,
      );
      store.accountDateList = result as {};
    },
    changeSelectedDate: (selectedDateInput: SelectedDateType) => {
      store.selectedDate = selectedDateInput;
      store.loadTransactions();
    },
    changeAccountObj: (accountObjIdInput: string) => {
      store.accountObjId = accountObjIdInput;
      store.loadTransactions();
    },
  }));

  store.loadTransactions();

  return (
    <TransactionStoreContext.Provider value={store}>
      {children}
    </TransactionStoreContext.Provider>
  );
};
