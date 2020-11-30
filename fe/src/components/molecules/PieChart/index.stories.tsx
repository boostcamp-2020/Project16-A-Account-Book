import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import PieChart, { Piece } from '.';

export default {
  title: 'molecules / PieChart',
};

export const SimplePieChart = () => {
  const pieces: Piece[] = [
    { color: 'blue', percent: 30 },
    { color: 'red', percent: 40 },
    { color: 'yellow', percent: 10 },
  ];
  return (
    <GlobalThemeProvider>
      <PieChart pieces={pieces} />
    </GlobalThemeProvider>
  );
};
