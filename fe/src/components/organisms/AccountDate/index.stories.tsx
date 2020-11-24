import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import locksvg from 'assets/svg/lock.svg';
import { transaction } from 'components/molecules/Transaction';
import AccountDate from '.';

export default {
  title: 'organisms / AccountDate',
  component: AccountDate,
};

export const AccountDateSample = () => {
  const date = new Date();

  const testTransactionList: transaction[] = [
    {
      id: 'dekvmczld',
      icon: locksvg,
      client: '시원한 육개장',
      classification: '식사',
      method: '네이버 페이',
      price: 10000,
    },
    {
      id: 'akjlwkndlkx',
      client: '얼큰한 국밥',
      classification: '식사',
      method: '네이버 페이',
      price: 6000,
    },
    {
      id: 'ajabjfdlkx',
      client: '달달한 하리보',
      classification: '간식',
      method: '현금',
      price: 30000,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <AccountDate date={date} transactionList={testTransactionList} />
    </ThemeProvider>
  );
};
