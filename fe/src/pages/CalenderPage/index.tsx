import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import Calender from 'components/organisms/Calender';
import NavBarComponent from 'components/organisms/NavBar';

const CalenderPage = () => {
  useEffect(() => {
    TransactionStore.loadTransactions();
  }, []);

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={TransactionStore.totalPrices}
    />
  );

  if (
    'message' in TransactionStore.transactions &&
    toJS(TransactionStore.transactions.message) === 'nodata'
  ) {
    return (
      <Template
        HeaderBar={<Header />}
        SubHeaderBar={SubHeaderBar}
        Contents={<Calender isSundayStart transactions={[]} />}
        NavBar={<NavBarComponent />}
      />
    );
  }

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
