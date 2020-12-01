import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
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
