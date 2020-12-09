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

  const mapFunc = (item: TransactionDBKeyValue) => {
    const [date, transactions] = item;

    if (
      TransactionStore.isFiltered &&
      !dateUtils.isDateInDateRange(new Date(date), startDate, endDate)
    )
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
