import React from 'react';
import AccountDate from 'components/organisms/AccountDate';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
// import { categoryCovertBig2Small } from 'stores/Category';
import { convertTransactionDBTypetoTransactionType } from 'stores/Transaction/transactionStoreUtils';

import dateUtils from 'utils/date';

// const convertTransactionDBTypetoTransactionType = (input: any[]) => {
//   if (typeof input === 'string') {
//     return [{ id: 'noId', category: 'nocategory', method: 'nomethod' }];
//   }
//   return input.reduce((acc, cur) => {
//     const { _id, category, method, ...other } = cur;
//     if (TransactionStore.isFiltered) {
//       const { methods, categories } = TransactionStore.getFilter();
//       const { type } = category;
//       const key = categoryCovertBig2Small(type);
//       if (!methods.find((x: string) => x === method._id)) return acc;
//       if (categories[key].disabled) return acc;
//       if (!categories[key].list.find((x: string) => x === category._id))
//         return acc;
//     }
//     return [
//       ...acc,
//       {
//         ...other,
//         id: _id,
//         category: category.title,
//         method: method.title,
//       },
//     ];
//   }, []);
// };

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
      <AccountDate
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
