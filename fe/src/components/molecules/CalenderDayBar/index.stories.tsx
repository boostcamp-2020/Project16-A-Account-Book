import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs, select } from '@storybook/addon-knobs';
import CalenderDayBar from '.';

export default {
  title: 'molecules / CalenderDayBar',
  component: CalenderDayBar,
  decorators: [withKnobs],
};

export const Default = () => {
  const isSundayStart = select('isSundayStart', [true, false], true);
  return (
    <ThemeProvider theme={theme}>
      <CalenderDayBar isSundayStart={isSundayStart} />
    </ThemeProvider>
  );
};
