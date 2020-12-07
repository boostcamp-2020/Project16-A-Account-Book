import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Calendar from '.';

export default {
  title: 'Organisms / Calendar',
  component: Calendar,
};

const testAccountDateList = {
  '2020-11-1': [
    {
      excludeFromBudget: false,
      _id: 'aaa',
      client: '삼겹살',
      date: '2020-11-01T00:00:00.000Z',
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
        __v: 0,
      },
      price: 10000,
    },
  ],
  '2020-11-2': [
    {
      excludeFromBudget: false,
      _id: 'bbb',
      client: '삼삼겹살',
      date: '2020-11-02T00:00:00.000Z',
      memo: '2-1메모',
      method: {
        _id: 'kakao',
        title: '카카오페이',
        __v: 0,
      },
      category: {
        _id: '5fbca53bbfdfb5daebfa507a',
        type: 'INCOME',
        title: '수입',
        __v: 0,
      },
      price: 1000,
    },
    {
      excludeFromBudget: false,
      _id: 'ccc',
      client: '삼삼삼겹살',
      date: '2020-11-02T00:00:00.000Z',
      memo: '2-2메모',
      method: {
        _id: 'naver',
        title: '네이버페이',
        __v: 0,
      },
      category: {
        _id: '5fbca53bbfdfb5daebfa507a',
        type: 'EXPENSE',
        title: '지출',
        __v: 0,
      },
      price: 555,
    },
    {
      excludeFromBudget: false,
      _id: '5fbe0536fd1e410d8ad46133',
      client: '삼삼삼삼겹살',
      date: '2020-11-03T00:00:00.000Z',
      memo: '2-3메모',
      method: {
        _id: 'kakao',
        title: '카카오페이',
        __v: 0,
      },
      category: {
        _id: '5fbca53bbfdfb5daebfa507a',
        type: 'EXPENSE',
        title: '지출',
        __v: 0,
      },
      price: 616,
    },
  ],
};

export const SundayStart = () => {
  return (
    <GlobalThemeProvider>
      <Calendar
        isSundayStart
        selectedDate={new Date('2020-11')}
        transactions={testAccountDateList}
      />
    </GlobalThemeProvider>
  );
};

export const MondayStart = () => {
  return (
    <GlobalThemeProvider>
      <Calendar
        isSundayStart={false}
        selectedDate={new Date('2020-11')}
        transactions={testAccountDateList}
      />
    </GlobalThemeProvider>
  );
};

export const Empty = () => {
  return (
    <GlobalThemeProvider>
      <Calendar isSundayStart selectedDate={new Date('2020-11')} />
    </GlobalThemeProvider>
  );
};
