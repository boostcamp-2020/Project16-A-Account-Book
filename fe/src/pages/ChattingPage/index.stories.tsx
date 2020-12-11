import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ChattingPage from '.';

export default {
  title: 'page / ChattingPage',
};

export const defaultChattingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChattingPage />
    </ThemeProvider>
  );
};
