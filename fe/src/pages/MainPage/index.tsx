import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import TransactionDateList, { calTotalPrices } from './TransactionDateList';

export interface Props {}

const MainPage = () => {
  const totalPrices = calTotalPrices(toJS(TransactionStore.accountDateList));
  const SubHeaderBar = (
    <MonthInfo
      month={TransactionStore.selectedDate.month}
      total={{
        income: totalPrices.income,
        expense: totalPrices.expense,
      }}
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
