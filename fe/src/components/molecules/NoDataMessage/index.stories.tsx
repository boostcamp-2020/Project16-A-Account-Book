import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import NodataMessage from '.';

export default {
  title: 'molecules / NodataMessage',
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <NodataMessage />
    </GlobalThemeProvider>
  );
};
