import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import DateMoneyHeader from '.';

export default {
  title: 'molecules/DateMoneyHeader',
  component: DateMoneyHeader,
};

export const DateMoneyHeaderSample = () => {
  const date = new Date();
  const value = 1000000;
  const income = 400000;
  const expense = 560000;
  const unclassified = 0;
  return (
    <ThemeProvider theme={theme}>
      <DateMoneyHeader
        totalPayment={value}
        date={date}
        income={income}
        expense={expense}
        unclassified={unclassified}
      />
    </ThemeProvider>
  );
};
