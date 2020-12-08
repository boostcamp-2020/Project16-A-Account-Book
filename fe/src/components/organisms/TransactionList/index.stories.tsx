import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import locksvg from 'assets/svg/lock.svg';
import TransactionList from '.';

export default {
  title: 'organisms/TransactionList',
  component: TransactionList,
};

export const TransactionListSample = () => {
  const date = new Date();

  const testTransactionList: any[] = [
    {
      id: 'dekvmczld',
      icon: locksvg,
      date: new Date(),
      client: '시원한 육개장',
      category: '식사',
      method: '네이버 페이',
      price: 10000,
    },
    {
      id: 'akjlwkndlkx',
      client: '얼큰한 국밥',
      date: new Date(),
      category: '식사',
      method: '네이버 페이',
      price: 6000,
    },
    {
      id: 'ajabjfdlkx',
      client: '달달한 하리보',
      date: new Date(),
      category: '간식',
      method: '현금',
      price: 30000,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD:fe/src/components/organisms/TransactionList/index.stories.tsx
      <TransactionList date={date} transactionList={testTransactionList} />
=======
      <AccountDate
        date={date}
        transactionList={testTransactionList}
        onClick={() => {}}
      />
>>>>>>> f7eeed82f18652e1866eba578799b86ed30d89a9:fe/src/components/organisms/AccountDate/index.stories.tsx
    </ThemeProvider>
  );
};
