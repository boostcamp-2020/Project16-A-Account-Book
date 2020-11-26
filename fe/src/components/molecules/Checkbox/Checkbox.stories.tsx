import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import Checkbox from '.';

export default {
  title: 'molecules/Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};

export const checkbox = () => {
  const checked = select('checked', [true, false], false);
  return (
    <ThemeProvider theme={theme}>
      <Checkbox checked={checked} onClick={() => {}} />
    </ThemeProvider>
  );
};
