import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import TransactionDateList, { calTotalPrices } from './TransactionDateList';

const MainPage = () => {
  useEffect(() => {
    TransactionStore.setSelectedDate({
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    });
    TransactionStore.loadTransactions();
  }, []);

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.selectedDate.month)}
      total={calTotalPrices(toJS(TransactionStore.accountDateList))}
    />
  );

  const Contents = (
    <div>
      <FilterBar />
      <TransactionDateList list={toJS(TransactionStore.accountDateList)} />
    </div>
  );

  return (
    <Template
      HeaderBar={<Header />}
      SubHeaderBar={SubHeaderBar}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(MainPage);
