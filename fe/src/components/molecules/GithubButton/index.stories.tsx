import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GithubBtn from '.';

export default {
  title: 'Molecules / GithubBtn',
};

export const defaultButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GithubBtn />
    </ThemeProvider>
  );
};
