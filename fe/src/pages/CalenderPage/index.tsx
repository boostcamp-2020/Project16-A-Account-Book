import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import Calender from 'components/organisms/Calender';
import NavBarComponent from 'components/organisms/NavBar';
import { calTotalPrices } from './TransactionDateList';

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
    <>
      <Calender
        isSundayStart
        transactions={toJS(TransactionStore.accountDateList)}
      />
    </>
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
