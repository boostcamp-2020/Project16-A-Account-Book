import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import PieChart from '.';

export default {
  title: 'molecules / PieChart',
};

export const SimplePieChart = () => {
  const pieces = [
    {
      title: '기타수입',
      color: '#be00a5',
      _id: '5fc79e46233d1b4e239f28df',
      totalPrice: 1445389,
      percent: 64,
    },
    {
      title: '사업수입',
      color: '#dded7e',
      _id: '5fc79e46233d1b4e239f28de',
      totalPrice: 803999,
      percent: 36,
    },
  ];
  return (
    <GlobalThemeProvider>
      <PieChart pieces={pieces} />
    </GlobalThemeProvider>
  );
};
