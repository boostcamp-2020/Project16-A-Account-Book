import React from 'react';
import TransactionList from 'components/organisms/TransactionList';
import { TransactionStore } from 'stores/Transaction';
import {
  filterList,
  convertTransactionDBTypetoTransactionType,
} from 'stores/Transaction/transactionStoreUtils';
import { observer } from 'mobx-react-lite';
import * as types from 'types';

const TransactionDateList = ({
  list,
  onClick,
}: {
  list: types.IDateTransactionObj;
  onClick: any;
}) => {
  const getTransactionListComponent = ([date, transactions]: [
    string,
    types.TransactionDBType[],
  ]) => {
    const transactionList = TransactionStore.isFiltered
      ? filterList(transactions)
      : transactions;
    if (transactionList.length === 0) {
      return <></>;
    }
    const formattedTransactionList = convertTransactionDBTypetoTransactionType(
      transactionList,
    );
    return (
      <TransactionList
        key={date}
        date={new Date(date)}
        onClick={onClick}
        transactionList={formattedTransactionList}
      />
    );
  };

  return <>{Object.entries(list).map(getTransactionListComponent)}</>;
};

export default observer(TransactionDateList);
