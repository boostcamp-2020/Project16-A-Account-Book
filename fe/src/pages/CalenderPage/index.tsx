import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import Calender from 'components/organisms/Calender';
import NavBarComponent from 'components/organisms/NavBar';
import { calTotalPrices } from 'stores/Transaction/transactionStoreUtils';
import date from 'utils/date';

const { start, end } = date.getOneMonthRange(
  String(new Date().getFullYear()),
  String(new Date().getMonth() + 1),
);

const CalenderPage = () => {
  useEffect(() => {
    TransactionStore.setFilter(new Date(start), new Date(end), null);
    TransactionStore.loadTransactions();
  }, []);

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={calTotalPrices(toJS(TransactionStore.transactions))}
    />
  );

  const Contents = (
    <>
      <Calender
        isSundayStart
        transactions={toJS(TransactionStore.transactions)}
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

export default observer(CalenderPage);
