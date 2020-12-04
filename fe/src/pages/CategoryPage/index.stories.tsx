import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CategoryPage from '.';

export default {
  title: 'page / CategoryPage',
};

export const defaultCategoryPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryPage />
    </ThemeProvider>
  );
};
