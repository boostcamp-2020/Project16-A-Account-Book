import React, { useState } from 'react';
import { useLocalStore } from 'mobx-react';
import axios from 'apis/axios';
import urls from 'apis/urls';

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

const StoreContext = React.createContext<any>({});

export const TransactionStoreProvider = ({ children }: any) => {
  const initSelectedDate = {
    year: 2020,
    month: 11,
  };
  const [selectedDate, setSelectedDate] = useState<SelectedDateType>(
    initSelectedDate,
  );
  const [accountObjId, setAccountObjId] = useState<string>('test');

  const store = useLocalStore(() => ({
    accountDateList: {},
    loadTransactions: async () => {
      const queryString = `?year=${selectedDate.year}&month=${selectedDate.month}`;
      const result = await axios.get(
        `${urls.transaction(accountObjId)}${queryString}`,
      );
      store.accountDateList = result;
    },
    changeSelectedDate: (selectedDateInput: SelectedDateType) => {
      setSelectedDate(selectedDateInput);
      store.loadTransactions();
    },
    changeAccountObj: (accountObjInput: string) => {
      setAccountObjId(accountObjInput);
      store.loadTransactions();
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
