import React, { useEffect, useRef } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import CalenderBind from 'components/organisms/CalendarBind';
import NavBarComponent from 'components/organisms/NavBar';
import NoData from 'components/organisms/NoData';
import DateTransactionModal from 'components/organisms/DateTransactionModal';

const CalenderPage = () => {
  const dateModal = useRef<HTMLDivElement>();
  let loaded = false;

  useEffect(() => {
    if (!loaded) {
      TransactionStore.loadTransactions();
      loaded = true;
    }
    if (dateModal.current) {
      if (TransactionStore.isCalendarModalOpen) {
        dateModal.current.classList.add('visible');
      } else {
        dateModal.current.classList.remove('visible');
      }
    }
  }, [TransactionStore.isCalendarModalOpen]);

  const SubHeaderBar = <MonthInfo />;
  const selectedDate = {
    startDate: toJS(TransactionStore.dates.startDate),
    endDate: toJS(TransactionStore.dates.endDate),
  };

  if (Object.keys(toJS(TransactionStore.transactions)).length === 0) {
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
      <DateTransactionModal refs={dateModal} />
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
