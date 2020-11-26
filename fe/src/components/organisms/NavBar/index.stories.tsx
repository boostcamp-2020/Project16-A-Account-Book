import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import NavBar from '.';

export default {
  title: 'organisms / NavBar',
  component: NavBar,
};

export const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};
