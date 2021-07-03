import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import FacebookButton from '.';

export default {
  title: 'Molecules / FacebookBtn',
};

export const defaultButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <FacebookButton />
    </ThemeProvider>
  );
};
