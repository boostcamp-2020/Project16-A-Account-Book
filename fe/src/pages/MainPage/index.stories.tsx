import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import MainPage from '.';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [withKnobs],
};

export const MainPageDefault = () => {
  return (
    <GlobalThemeProvider>
      <MainPage />
    </GlobalThemeProvider>
  );
};
