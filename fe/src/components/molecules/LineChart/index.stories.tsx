import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LineChart from '.';

export default {
  title: 'molecules / LineChart',
};
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
export const SimpleLineChart = () => {
  return (
    <GlobalThemeProvider>
      <LineChart
        width={200}
        height={100}
        data={data}
        horizontalGuides={5}
        precision={1}
      />
    </GlobalThemeProvider>
  );
};
