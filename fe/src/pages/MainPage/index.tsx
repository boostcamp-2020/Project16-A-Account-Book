import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore, state } from 'stores/Transaction';
import { useHistory, useParams } from 'react-router-dom';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import NoData from 'components/organisms/NoData';
import loadingImg from 'assets/svg/loading.svg';
import TransactionDateList from './TransactionDateList';

const MainPage = () => {
  const history = useHistory();
  const { title, owner } = useParams<{ title: string; owner: string }>();
  const transactions = TransactionStore.getTransactions();

  useEffect(() => {
    TransactionStore.loadTransactions();
  }, [TransactionStore.dates]);

  const onClickHandler = (id: string) => {
    history.push(
      `/transactions/${owner}/${title}/update?transactionObjId=${id}`,
    );
  };

  const Contents = (
    <>
      <FilterBar />
      {Object.keys(transactions).length === 0 ? (
        <NoData />
      ) : (
        <TransactionDateList list={transactions} onClick={onClickHandler} />
      )}
    </>
  );

  const renderLoading = (
    <div className="emptyList" id="loading">
      <img id="loadingImg" src={loadingImg} alt="loading..." />
    </div>
  );

  if (TransactionStore.state === state.PENDING) {
    return (
      <Template
        HeaderBar={<Header title="홈" />}
        SubHeaderBar={<MonthInfo />}
        Contents={renderLoading}
        NavBar={<NavBarComponent />}
      />
    );
  }

  return (
    <Template
      HeaderBar={<Header title="홈" />}
      SubHeaderBar={<MonthInfo />}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(MainPage);
