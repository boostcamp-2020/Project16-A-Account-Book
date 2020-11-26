import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import theme from 'styles/theme';

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
    <GlobalThemeProvider>
      <PriceTag value={value} size={size} bold={bold} color={color} />
    </GlobalThemeProvider>
  );
};
