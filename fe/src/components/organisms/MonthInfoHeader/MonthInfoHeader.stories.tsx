import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import MonthInfoHeader from '.';

export default {
  title: 'organisms/MonthInfoHeader',
  component: MonthInfoHeader,
};

export const monthInfoHeader = () => {
  const date = {
    startDate: '2020-12-01',
    endDate: '2021-11-11',
  };
  const total = {
    income: 1000,
    expense: 987654321,
  };
  return (
    <ThemeProvider theme={theme}>
      <MonthInfoHeader date={date} total={total} />
    </ThemeProvider>
  );
};
