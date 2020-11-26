import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import HeaderBar from '.';

export default {
  title: 'organisms / HeaderBar',
  component: HeaderBar,
  decorators: [withKnobs],
};

export const HeaderBarSample = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
    </ThemeProvider>
  );
};
