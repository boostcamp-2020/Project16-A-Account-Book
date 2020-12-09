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
import NoData from 'components/organisms/NoData';
import TransactionDateList from './TransactionDateList';

const MainPage = () => {
  const history = useHistory();
  const { title, owner } = useParams<{ title: string; owner: string }>();

  useEffect(() => {
    TransactionStore.loadTransactions();
  }, [TransactionStore.dates]);

  const SubHeaderBar = <MonthInfo />;

  const onClickHandler = (id: string) => {
    history.push(
      `/transactions/${owner}/${title}/update?transactionObjId=${id}`,
    );
  };

  const Contents = (
    <div>
      <FilterBar />
      <TransactionDateList
        list={TransactionStore.getTransactions()}
        onClick={onClickHandler}
      />
    </div>
  );

  if (toJS(TransactionStore.transactions).length === 0) {
    const ContentsComponent = (
      <>
        <FilterBar />
        <NoData />
      </>
    );
    return (
      <Template
        HeaderBar={<Header />}
        SubHeaderBar={SubHeaderBar}
        Contents={ContentsComponent}
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
