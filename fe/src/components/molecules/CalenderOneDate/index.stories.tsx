import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CalenderOneDate from '.';

export default {
  title: 'molecules / CalenderOneDate',
  component: CalenderOneDate,
};

export const Default = () => {
  const onClick = () => alert('calender button clicked');
  return (
    <ThemeProvider theme={theme}>
      <CalenderOneDate
        date={7}
        income={20000}
        expense={30000}
        onClick={onClick}
      />
    </ThemeProvider>
  );
};
