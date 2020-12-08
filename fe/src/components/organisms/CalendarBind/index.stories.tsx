import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalendarBind from '.';

export default {
  title: 'Organisms / CalendarBind',
  component: CalendarBind,
};

const testAccountDateList = {
  '2020-10-12': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2020-10-12T00:00:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'INCOME',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },

    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼겹살d',
      date: '2020-10-12T00:20:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'EXPENSE',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
  ],
  '2020-10-14': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2020-10-14T00:00:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'INCOME',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼겹살d',
      date: '2020-10-14T00:20:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'EXPENSE',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
  ],

  '2020-12-12': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2020-12-12T00:00:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'INCOME',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼겹살d',
      date: '2020-12-12T00:20:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'EXPENSE',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
  ],
  '2021-2-12': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2021-02-12T00:01111.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'INCOME',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },

    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼겹살d',
      date: '2021-02-12T00:21:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'EXPENSE',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
  ],
  '2021-2-13': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2021-02-13T00:01111.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'INCOME',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },

    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼겹살d',
      date: '2021-02-13T00:21:00.000Z',
      memo: '1일메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: 'incomeid',
        type: 'EXPENSE',
        title: '식사',
        color: '#102e94',
        __v: 0,
      },
      price: 10000,
      __v: 0,
    },
  ],
};

export const SundayStart = () => {
  return (
    <GlobalThemeProvider>
      <CalendarBind
        isSundayStart
        transactions={testAccountDateList}
        selectedDate={{
          startDate: new Date('2020-10-01'),
          endDate: new Date('2021-06-30'),
        }}
      />
    </GlobalThemeProvider>
  );
};

export const MondayStart = () => {
  return (
    <GlobalThemeProvider>
      <CalendarBind
        isSundayStart={false}
        transactions={testAccountDateList}
        selectedDate={{
          startDate: new Date('2020-10-01'),
          endDate: new Date('2021-06-30'),
        }}
      />
    </GlobalThemeProvider>
  );
};
