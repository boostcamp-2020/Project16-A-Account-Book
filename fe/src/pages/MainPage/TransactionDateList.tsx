import React from 'react';
import TransactionList from 'components/organisms/TransactionList';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import { convertTransactionDBTypetoTransactionType } from 'stores/Transaction/transactionStoreUtils';

import dateUtils from 'utils/date';

type TransactionDBKeyValue = [date: string, transactions: any];

const TransactionDateList = ({
  list,
  onClick,
}: {
  list: any;
  onClick: any;
}) => {
  const { startDate, endDate } = TransactionStore.getOriginDates();
  const start = new Date(dateUtils.dateFormatter(startDate)).getTime();
  const end = new Date(dateUtils.dateFormatter(endDate)).getTime();

  const mapFunc = (item: TransactionDBKeyValue) => {
    const [date, transactions] = item;
    const targetDate = new Date(date).getTime();
    if (TransactionStore.isFiltered && (targetDate < start || targetDate > end))
      return '';
    const filteredTransactionList = convertTransactionDBTypetoTransactionType(
      transactions,
    );
    if (filteredTransactionList.length === 0) return '';
    return (
      <TransactionList
        key={date}
        date={new Date(date)}
        onClick={onClick}
        transactionList={filteredTransactionList}
      />
    );
  };

  return <>{Object.entries(list).map(mapFunc)}</>;
};

export default observer(TransactionDateList);
