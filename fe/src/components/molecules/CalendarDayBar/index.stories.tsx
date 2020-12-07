import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs, select } from '@storybook/addon-knobs';
import CalendarDayBar from '.';

export default {
  title: 'molecules / CalendarDayBar',
  component: CalendarDayBar,
  decorators: [withKnobs],
};

export const Default = () => {
  const isSundayStart = select('isSundayStart', [true, false], true);
  return (
    <ThemeProvider theme={theme}>
      <CalendarDayBar isSundayStart={isSundayStart} />
    </ThemeProvider>
  );
};
