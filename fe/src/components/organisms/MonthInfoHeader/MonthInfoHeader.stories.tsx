import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import MonthInfoHeader from '.';

export default {
  title: 'organisms/MonthInfoHeader',
  component: MonthInfoHeader,
};

export const monthInfoHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <MonthInfoHeader />
    </ThemeProvider>
  );
};
