import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import DateAtom from '.';

export default {
  title: 'atoms/DateAtom',
  component: DateAtom,
};

export const smDateAtom = () => {
  const date = new Date();

  return (
    <ThemeProvider theme={theme}>
      <DateAtom date={date} parseString="dz" />
    </ThemeProvider>
  );
};

export const fullDateAtom = () => {
  const date = new Date();

  return (
    <ThemeProvider theme={theme}>
      <DateAtom date={date} parseString="ymdz" />
    </ThemeProvider>
  );
};
