import React from 'react';
import AccountDate from 'components/organisms/TransactionList';
import { convertTransactionDBTypetoTransactionType } from 'stores/Transaction/transactionStoreUtils';

type TransactionDBKeyValue = [date: string, transactions: any];

const TransactionDateList = ({
  list,
  onClick,
}: {
  list: any;
  onClick: any;
}) => {
  const mapFunc = (item: TransactionDBKeyValue) => {
    const [date, transactions] = item;
    return (
      <AccountDate
        key={date}
        date={new Date(date)}
        onClick={onClick}
        transactionList={convertTransactionDBTypetoTransactionType(
          transactions as [],
        )}
      />
    );
  };

  return <>{Object.entries(list).map(mapFunc)}</>;
};

export default TransactionDateList;
