import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore, TransactionDBType } from 'stores/Transaction';
import * as S from './style';

export interface Props {}

const convertTransactionDBTypetoTransactionType = (
  input: TransactionDBType[],
) => {
  return input.map((el) => {
    const { _id, category, method, ...other } = el;
    return {
      ...other,
      id: _id,
      category: category.title,
      method: method.title,
    };
  });
};

interface PricesType {
  income: number;
  expense: number;
}

const MainPage = ({ ...props }: Props) => {
  const [accountDateList, setAccountDateList] = useState<JSX.Element[]>([]);
  const [SubHeaderBar, setSubHeaderBar] = useState<JSX.Element>(<></>);
  const HeaderBar = <S.HeaderBar />;

  useEffect(() => {
    if ('accountDateList' in TransactionStore) {
      const calculateTotalPrice = Object.entries(
        toJS(TransactionStore.accountDateList),
      ).reduce(
        (totalPrices: PricesType, [, oneAccountDate]) => {
          const res = (oneAccountDate as []).reduce(
            (subPrices: PricesType, transaction: any) => {
              if (transaction.category.type === 'INCOME') {
                return {
                  ...subPrices,
                  income: subPrices.income + transaction.price,
                };
              }
              if (transaction.category.type === 'EXPENSE') {
                return {
                  ...subPrices,
                  expense: subPrices.expense + transaction.price,
                };
              }
              return subPrices;
            },
            { income: 0, expense: 0 },
          );

          return {
            income: totalPrices.income + res.income,
            expense: totalPrices.expense + res.expense,
          };
        },
        { income: 0, expense: 0 },
      );

      const accountDateListComponent = Object.entries(
        toJS(TransactionStore.accountDateList),
      ).map(([date, oneAccountDate]) => {
        return (
          <S.AccountDate
            key={date}
            date={new Date(date)}
            transactionList={convertTransactionDBTypetoTransactionType(
              oneAccountDate as [],
            )}
          />
        );
      });
      setAccountDateList([...accountDateListComponent]);
      setSubHeaderBar(
        <S.MonthInfoHeader
          month={TransactionStore.selectedDate.month}
          total={{
            income: calculateTotalPrice.income,
            expense: calculateTotalPrice.expense,
          }}
        />,
      );
    }
  }, [TransactionStore.accountDateList]);

  const Contents = (
    <>
      <S.FilterBar />
      {accountDateList}
    </>
  );
  const NavBar = <S.NavBar />;

  return (
    <S.MainPage {...props}>
      <S.HeaderNav
        HeaderBar={HeaderBar}
        SubHeaderBar={SubHeaderBar}
        Contents={Contents}
        NavBar={NavBar}
      />
    </S.MainPage>
  );
};

export default observer(MainPage);
