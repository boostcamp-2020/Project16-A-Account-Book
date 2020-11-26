import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import FilterBar from '.';

export default {
  title: 'organisms/ FilterBar',
  component: FilterBar,
  decorators: [withKnobs],
};

export const FilterBarSample = () => {
  return (
    <ThemeProvider theme={theme}>
      <FilterBar />
    </ThemeProvider>
  );
};
