import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LineChart from '.';

export default {
  title: 'molecules / LineChart',
};

export const SimpleLineChart = () => {
  const data = [
    { date: '11/01', totalPrice: 190 },
    { date: '11/04', totalPrice: 0 },
    { date: '11/8', totalPrice: 0 },
    { date: '11/12', totalPrice: 0 },
    { date: '11/16', totalPrice: 0 },
    { date: '11/20', totalPrice: 100 },
    { date: '11/24', totalPrice: 0 },
    { date: '11/30', totalPrice: 400 },
  ];
  return (
    <GlobalThemeProvider>
      <LineChart width={200} height={100} data={data} horizontalGuides={5} />
    </GlobalThemeProvider>
  );
};
export const LineChart2 = () => {
  const data = [
    { date: '12/02', totalPrice: 2000202020 },
    { date: '12/04', totalPrice: 2000202020 },
    { date: '12/06', totalPrice: 0 },
  ];
  return (
    <GlobalThemeProvider>
      <LineChart width={200} height={180} data={data} horizontalGuides={3} />
    </GlobalThemeProvider>
  );
};
export const SimpleLineChart3 = () => {
  const data = [
    { date: '2020-12-6', totalPrice: 0 },
    { date: '2020-12-11', totalPrice: 0 },
  ];
  return (
    <GlobalThemeProvider>
      <LineChart width={200} height={100} data={data} horizontalGuides={5} />
    </GlobalThemeProvider>
  );
};
