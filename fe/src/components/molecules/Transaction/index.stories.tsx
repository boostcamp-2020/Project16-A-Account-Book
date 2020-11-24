import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import locksvg from 'assets/svg/lock.svg';
import { withKnobs, object } from '@storybook/addon-knobs';
import Transaction, { transaction } from '.';

export default {
  title: 'molecules/Transaction',
  component: Transaction,
  decorators: [withKnobs],
};

export const TransactionSample = () => {
  const testTransaction = object<transaction>('transaction', {
    id: 'slakvken',
    client: '얼큰한 국밥',
    classification: '식사',
    method: '네이버 페이',
    price: 6000,
  });

  return (
    <ThemeProvider theme={theme}>
      <Transaction trans={testTransaction} />
    </ThemeProvider>
  );
};

export const TransactionSample2 = () => {
  const testTransaction: transaction = {
    id: 'dkkelakb',
    icon: locksvg,
    client: '시원한 육개장',
    classification: '식사',
    method: '네이버 페이',
    price: 10000,
  };

  return (
    <ThemeProvider theme={theme}>
      <Transaction trans={testTransaction} />
    </ThemeProvider>
  );
};
