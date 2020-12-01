import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalenderOneWeek from '.';

export default {
  title: 'molecules / CalenderOneWeek',
  component: CalenderOneWeek,
};

const oneDateList = [
  {
    date: 6,
    income: 20000,
    expense: 30000,
  },
  {
    date: 7,
    income: 20000,
    expense: 30000,
  },
  {
    date: 8,
    income: 20000,
    expense: 30000,
  },
  {
    date: 9,
    income: 20000,
    expense: 30000,
  },
  {
    date: 10,
    income: 20000,
    expense: 30000,
  },
  {
    date: 11,
    income: 20000,
    expense: 30000,
  },
  {
    date: 12,
    income: 20000,
    expense: 30000,
  },
];
export const Default = () => {
  return (
    <GlobalThemeProvider>
      <CalenderOneWeek oneDateList={oneDateList} />
    </GlobalThemeProvider>
  );
};

const start1Data = [
  {
    date: 1,
    income: 20000,
    expense: 30000,
  },
  {
    date: 2,
    income: 20000,
    expense: 30000,
  },
];

export const Start1 = () => {
  return (
    <GlobalThemeProvider>
      <CalenderOneWeek oneDateList={start1Data} />
    </GlobalThemeProvider>
  );
};

const start29Data = [
  {
    date: 29,
    income: 20000,
    expense: 30000,
  },
  {
    date: 30,
    income: 20000,
    expense: 30000,
  },
];

export const Start29 = () => {
  return (
    <GlobalThemeProvider>
      <CalenderOneWeek oneDateList={start29Data} />
    </GlobalThemeProvider>
  );
};
