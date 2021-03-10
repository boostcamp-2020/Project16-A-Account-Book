import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import StatisticsItem from '.';

export default {
  title: 'molecules / StatisticsItem',
};

export const DefaultStatisticsItem = () => {
  const category = {
    title: '기타수입',
    color: '#be00a5',
    id: '5fc79e46233d1b4e239f28df',
    totalPrice: 1445389,
    percent: 64,
  };
  return (
    <GlobalThemeProvider>
      <StatisticsItem category={category} />
    </GlobalThemeProvider>
  );
};
