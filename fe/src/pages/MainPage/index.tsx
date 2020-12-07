import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import { useHistory, useParams } from 'react-router-dom';

import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import TransactionDateList from './TransactionDateList';

const MainPage = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    TransactionStore.loadTransactions();
  }, []);

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={TransactionStore.totalPrices}
    />
  );

  const onClickHandler = (id: string) => {
    history.push(`/transactions/${title}/update?transactionObjId=${id}`);
  };

  const Contents = (
    <div>
      <FilterBar />
      <TransactionDateList
        list={toJS(TransactionStore.transactions)}
        onClick={onClickHandler}
      />
    </div>
  );

  if (toJS(TransactionStore.transactions).length === 0) {
    return (
      <Template
        HeaderBar={<Header />}
        SubHeaderBar={SubHeaderBar}
        Contents={<FilterBar />}
        NavBar={<NavBarComponent />}
      />
    );
  }
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
