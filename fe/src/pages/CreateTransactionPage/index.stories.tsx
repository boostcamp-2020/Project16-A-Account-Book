import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CreateTransactionPage from '.';

export default {
  title: 'page/CreateTransactionPage',
  component: CreateTransactionPage,
};

export const TransactionCreate = () => {
  return (
    <ThemeProvider theme={theme}>
      <CreateTransactionPage />
    </ThemeProvider>
  );
};
