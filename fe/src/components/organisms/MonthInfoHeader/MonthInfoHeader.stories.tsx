import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import MonthInfoHeader from '.';

export default {
  title: 'organisms/MonthInfoHeader',
  component: MonthInfoHeader,
};

export const monthInfoHeader = () => {
  const month = 11;
  const total = {
    income: 1000,
    expense: 987654321,
  };
  return (
    <ThemeProvider theme={theme}>
      <MonthInfoHeader month={month} total={total} />
    </ThemeProvider>
  );
};
