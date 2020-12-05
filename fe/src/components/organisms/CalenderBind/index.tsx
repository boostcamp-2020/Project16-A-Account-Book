import React from 'react';
import * as S from './style';

interface Props {
  isSundayStart: boolean;
  transactions: any;
}

const BindCalender = ({
  isSundayStart,
  transactions = {},
  ...props
}: Props): React.ReactElement => {
  const Calenders: Array<any> = [];
  let nowKey = '';
  let nowYearMonthKey = '';
  let nowTransactions: any = {};
  Object.entries(transactions).forEach((el) => {
    const [key, value] = el;
    const [year, month] = key.split('-');
    const yearMonthKey = `${year}-${month}`;
    if (nowKey === '') {
      nowKey = key;
      nowYearMonthKey = yearMonthKey;
    }

    if (nowYearMonthKey !== yearMonthKey) {
      nowYearMonthKey = yearMonthKey;
      nowKey = key;
      Calenders.push({ ...nowTransactions });
      nowTransactions = {};
    }
    nowTransactions[key] = value;
  });
  if (nowTransactions.length !== 0) {
    Calenders.push({ ...nowTransactions });
  }
  const CalenderComponents = Calenders.map((el: any) => {
    return (
      <S.Calender
        key={JSON.stringify(el)}
        isSundayStart={isSundayStart}
        transactions={el}
      />
    );
  });

  return <S.BindCalender {...props}>{CalenderComponents}</S.BindCalender>;
};

export default BindCalender;
