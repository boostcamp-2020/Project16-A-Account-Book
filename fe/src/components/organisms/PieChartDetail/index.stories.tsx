import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import PieChartDetail from '.';

export default {
  title: 'organisms / PieChartDetail',
};

export const DefaultPieChartDetail = () => {
  const categories = [
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
  const checkStatus = {
    income: false,
    expense: true,
  };
  const totalPrice = {
    income: 10000,
    expense: 20000,
  };
  return (
    <GlobalThemeProvider>
      <PieChartDetail
        totalPrice={totalPrice}
        checkStatus={checkStatus}
        categories={categories}
        onClick={() => {}}
      />
    </GlobalThemeProvider>
  );
};
