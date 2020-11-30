import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { transactionStore } from 'stores/Transaction';
import * as S from './style';
import TransactionDateList from './TransactionDateList';

export interface Props {}

const MainPage = ({ ...props }: Props) => {
  const SubHeaderBar = (
    <S.MonthInfoHeader
      month={transactionStore.month}
      total={{
        income: transactionStore.totalPrices.income,
        expense: transactionStore.totalPrices.expense,
      }}
    />
  );

  const Contents = (
    <div>
      <S.FilterBar />
      <TransactionDateList list={toJS(transactionStore.accountDateList)} />
    </div>
  );

  return (
    <S.MainPage {...props}>
      <S.HeaderNav
        HeaderBar={<S.HeaderBar />}
        SubHeaderBar={SubHeaderBar}
        Contents={Contents}
        NavBar={<S.NavBar />}
      />
    </S.MainPage>
  );
};

export default observer(MainPage);
