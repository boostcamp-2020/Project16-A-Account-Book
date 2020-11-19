import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';

import PriceTag from '.';

export default {
  title: 'atoms/PriceTag',
  component: PriceTag,
  decorators: [withKnobs],
};
export const priceTag = () => {
  const value = number('value', 1000000);
  const size = select('size', Object.keys(theme.fontSize), 'md');
  const bold = select('bold', [true, false], true);
  const color = select('color', Object.keys(theme.color), 'black');
  return (
    <ThemeProvider theme={theme}>
      <PriceTag value={value} size={size} bold={bold} color={color} />
    </ThemeProvider>
  );
};
