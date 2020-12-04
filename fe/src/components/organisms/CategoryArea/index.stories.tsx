import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CategoryArea from '.';

export default {
  title: 'Organisms / CategoryArea',
};

export const defaultTabHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryArea dataList={[]} />
    </ThemeProvider>
  );
};
