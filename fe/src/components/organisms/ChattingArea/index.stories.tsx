import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ChattingArea from '.';

export default {
  title: 'organisms / ChattingArea',
};

export const defaultArea = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChattingArea />
    </ThemeProvider>
  );
};
