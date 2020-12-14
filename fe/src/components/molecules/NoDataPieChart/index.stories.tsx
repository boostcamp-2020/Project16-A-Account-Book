import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import PieChart from '.';

export default {
  title: 'molecules / NoDataPieChart',
};

export const NoDataPieChart = () => {
  return (
    <GlobalThemeProvider>
      <PieChart />
    </GlobalThemeProvider>
  );
};
