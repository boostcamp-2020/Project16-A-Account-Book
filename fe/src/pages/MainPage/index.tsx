import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { transactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import TransactionDateList from './TransactionDateList';

export interface Props {}

const MainPage = () => {
  const SubHeaderBar = (
    <MonthInfo
      month={transactionStore.month}
      total={{
        income: transactionStore.totalPrices.income,
        expense: transactionStore.totalPrices.expense,
      }}
    />
  );

  const Contents = (
    <div>
      <FilterBar />
      <TransactionDateList list={toJS(transactionStore.accountDateList)} />
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
