import React from 'react';
import AccountDate from 'components/organisms/TranssactionList';
import { convertTransactionDBTypetoTransactionType } from 'stores/Transaction/transactionStoreUtils';

type TransactionDBKeyValue = [date: string, transactions: any];

const TransactionDateList = ({ list }: { list: any }) => {
  const mapFunc = (item: TransactionDBKeyValue) => {
    const [date, transactions] = item;
    return (
      <AccountDate
        key={date}
        date={new Date(date)}
        transactionList={convertTransactionDBTypetoTransactionType(
          transactions as [],
        )}
      />
    );
  };

  return <>{Object.entries(list).map(mapFunc)}</>;
};

export default TransactionDateList;
