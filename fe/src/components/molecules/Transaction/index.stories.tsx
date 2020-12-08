import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import locksvg from 'assets/svg/lock.svg';
import Transaction from '.';

export default {
  title: 'molecules/AccountDate',
  component: Transaction,
};

export const TransactionSample1 = () => {
  const testTransaction = {
    id: 'slakvken',
    date: new Date(),
    client: '얼큰한 국밥',
    category: '식사',
    method: '네이버 페이',
    price: 6000,
  };

  return (
    <ThemeProvider theme={theme}>
      <Transaction trans={testTransaction} onClick={() => {}} />
    </ThemeProvider>
  );
};

export const TransactionSample2 = () => {
  const testTransaction = {
    id: 'dkkelakb',
    date: new Date(),
    icon: locksvg,
    client: '시원한 육개장',
    category: '식사',
    method: '네이버 페이',
    price: 10000,
  };

  return (
    <ThemeProvider theme={theme}>
      <Transaction trans={testTransaction} onClick={() => {}} />
    </ThemeProvider>
  );
};
