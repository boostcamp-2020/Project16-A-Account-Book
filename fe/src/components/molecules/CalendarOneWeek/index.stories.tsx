import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalendarOneWeek from '.';

export default {
  title: 'molecules / CalendarOneWeek',
  component: CalendarOneWeek,
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
      <CalendarOneWeek
        oneDateList={oneDateList}
        selectedDate={new Date('2020-11-01')}
      />
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
      <CalendarOneWeek
        oneDateList={start1Data}
        selectedDate={new Date('2020-11-01')}
      />
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
      <CalendarOneWeek
        oneDateList={start29Data}
        selectedDate={new Date('2020-11-01')}
      />
    </GlobalThemeProvider>
  );
};
