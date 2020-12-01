import React from 'react';
import { TransactionDBType } from 'stores/Transaction';
import * as S from './style';

export interface Props {
  isSundayStart: boolean;
  transactions: any;
}

interface accType {
  oneDateList: {
    income: number;
    expense: number;
    date: string;
  }[];
}

const Calender = ({
  isSundayStart,
  transactions,
  ...props
}: Props): React.ReactElement => {
  const { oneDateList } = Object.entries(transactions).reduce(
    (acc: accType, el: any) => {
      const [key, value]: [string, TransactionDBType[]] = el;
      const res = value.reduce(
        (acc2, els: TransactionDBType) => {
          if (els.category.type === 'INCOME') {
            return {
              ...acc2,
              income: acc2.income + els.price,
            };
          }
          return {
            ...acc2,
            expense: acc2.expense + els.price,
          };
        },
        {
          income: 0,
          expense: 0,
        },
      );
      return {
        oneDateList: [...acc.oneDateList, { ...res, date: key }],
      };
    },
    {
      oneDateList: [],
    },
  );

  new Array(new Date(new Date(oneDateList[0].date) - 1).getDay() + 1).fill(0);
  console.log('oneDateList : ', oneDateList);

  return (
    <S.Calender {...props}>
      <S.DayBar isSundayStart={isSundayStart} />
      <div>test</div>
    </S.Calender>
  );
};

export default Calender;
