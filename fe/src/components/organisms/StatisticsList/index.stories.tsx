import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import StatisticsList from '.';

export default {
  title: 'organisms / StatisticsList',
};

export const DefaultStatisticsList = () => {
  const categories = [
    {
      title: '기타수입',
      color: '#be00a5',
      id: '5fc79e46233d1b4e239f28df',
      totalPrice: 1445389,
      percent: 64,
    },
    {
      title: '사업수입',
      color: '#dded7e',
      id: '5fc79e46233d1b4e239f28de',
      totalPrice: 803999,
      percent: 36,
    },
  ];
  return (
    <GlobalThemeProvider>
      <StatisticsList categories={categories} />
    </GlobalThemeProvider>
  );
};
