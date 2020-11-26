import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs } from '@storybook/addon-knobs';
import MainPage from '.';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [withKnobs],
};

export const MainPageDefault = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};
