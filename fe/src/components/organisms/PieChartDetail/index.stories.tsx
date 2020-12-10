import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import PieChartDetail from '.';

export default {
  title: 'organisms / PieChartDetail',
};

export const DefaultPieChartDetail = () => {
  const statistics = {
    totalPrice: {
      income: 1234,
      expense: 10000,
    },
    incomeCategories: [
      {
        title: '기타수입',
        color: '#be00a5',
        _id: '5fc79e46233d1b4e239f28df',
        totalPrice: 1234,
        percent: 64,
      },
    ],
    expenseCategories: [
      {
        title: '지출',
        color: '#be00a5',
        _id: '5fc79e46233d1b4e239f28df',
        totalPrice: 10000,
        percent: 64,
      },
    ],
  };

  const checkStatus = {
    income: false,
    expense: true,
  };

  return (
    <GlobalThemeProvider>
      <PieChartDetail
        statistics={statistics}
        checkStatus={checkStatus}
        onClick={() => {}}
      />
    </GlobalThemeProvider>
  );
};
