import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import NoDataPieChartContents from '.';

export default {
  title: 'organisms / NoDataPieChartContents',
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <NoDataPieChartContents />
    </GlobalThemeProvider>
  );
};
