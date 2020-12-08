import { useState, useEffect } from 'react';
import { TransactionStore } from 'stores/Transaction';
import { IStatistics } from 'types';
import api from 'apis/category';

const initState = {
  totalPrice: {
    income: 0,
    expense: 0,
  },
  incomeCategories: [],
  expenseCategories: [],
};

const useStatistics = (): IStatistics => {
  const [statistics, setStatistics] = useState(initState);

  const loadAndSetStatistics = async () => {
    TransactionStore.loadTransactions();
    const loadedStatistics: any = await api.getCategoryStatistics(
      TransactionStore.accountObjId,
      TransactionStore.getDates(),
    );
    setStatistics(loadedStatistics);
  };

  useEffect(() => {
    loadAndSetStatistics();
  }, []);
  return statistics;
};
export default useStatistics;
