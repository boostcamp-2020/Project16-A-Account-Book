import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import CalenderBind from 'components/organisms/CalenderBind';
import NavBarComponent from 'components/organisms/NavBar';
import NoData from 'components/organisms/NoData';

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
  const selectedDate = {
    startDate: toJS(TransactionStore.dates.startDate),
    endDate: toJS(TransactionStore.dates.endDate),
  };

  if (toJS(TransactionStore.transactions).length === 0) {
    const ContentsComponent = <NoData />;

    return (
      <Template
        HeaderBar={<Header />}
        SubHeaderBar={SubHeaderBar}
        Contents={ContentsComponent}
        NavBar={<NavBarComponent />}
      />
    );
  }

  const Contents = (
    <>
      <CalenderBind
        isSundayStart
        transactions={toJS(TransactionStore.transactions)}
        selectedDate={selectedDate}
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
