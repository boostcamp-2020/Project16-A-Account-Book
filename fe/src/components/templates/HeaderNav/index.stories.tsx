import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs } from '@storybook/addon-knobs';
import MonthInfoHeader from 'components/organisms/MonthInfoHeader';
import AccountDate from 'components/organisms/AccountDate';
import HeaderBar from 'components/organisms/HeaderBar';
import { transaction } from 'components/molecules/Transaction';
import locksvg from 'assets/svg/lock.svg';
import HeaderNav from '.';

export default {
  title: 'templates/HeaderNav',
  component: HeaderNav,
  decorators: [withKnobs],
};

export const HeaderNavSample = () => {
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

  const MonthInfoHeaderComponent = (
    <MonthInfoHeader month={11} total={{ income: 20000, expense: 40000 }} />
  );
  const AccountDateComponent = (
    <AccountDate date={new Date()} transactionList={testTransactionList} />
  );
  return (
    <ThemeProvider theme={theme}>
      <HeaderNav
        HeaderBar={<HeaderBar />}
        SubHeaderBar={MonthInfoHeaderComponent}
        Contents={AccountDateComponent}
      />
    </ThemeProvider>
  );
};
