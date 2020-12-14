import React, { useEffect, useRef, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import CalenderBind from 'components/organisms/CalendarBind';
import ToggleSwitch from 'components/atoms/ToggleSwitch';
import NavBarComponent from 'components/organisms/NavBar';
import NoData from 'components/organisms/NoData';
import DateTransactionModal from 'components/organisms/DateTransactionModal';
import axios from 'apis/user';
import * as S from './styles';

const CalenderPage = () => {
  const dateModal = useRef<HTMLDivElement>();
  const [isSundayStart, setIsSundayStart] = useState<boolean>(
    sessionStorage.getItem('userIsSundayStart') === 'true',
  );
  let loaded = false;

  useEffect(() => {
    if (!loaded) {
      TransactionStore.loadTransactions();
      loaded = true;
    }
    axios.putUserStartOfWeek(isSundayStart);
    sessionStorage.setItem('userIsSundayStart', String(isSundayStart));
    if (dateModal.current) {
      if (TransactionStore.isCalendarModalOpen) {
        dateModal.current.classList.add('visible');
      } else {
        dateModal.current.classList.remove('visible');
      }
    }
  }, [isSundayStart, TransactionStore.isCalendarModalOpen]);

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
    <S.Contents>
      <DateTransactionModal refs={dateModal} />
      <ToggleSwitch
        className="toggleSwitch"
        selected={isSundayStart}
        setSelected={setIsSundayStart}
      />
      <CalenderBind
        isSundayStart={isSundayStart}
        transactions={toJS(TransactionStore.transactions)}
        selectedDate={selectedDate}
      />
    </S.Contents>
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
