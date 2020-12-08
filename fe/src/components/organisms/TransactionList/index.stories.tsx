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
      <TransactionList
        date={date}
        transactionList={testTransactionList}
        onClick={() => {}}
      />
    </ThemeProvider>
  );
};
