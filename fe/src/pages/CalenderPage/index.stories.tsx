import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalenderPage from '.';

export default {
  title: 'pages/CalenderPage',
  component: CalenderPage,
  decorators: [withKnobs],
};

export const CalenderPageDefault = () => {
  return (
    <GlobalThemeProvider>
      <CalenderPage />
    </GlobalThemeProvider>
  );
};
