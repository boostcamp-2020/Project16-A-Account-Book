import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import PriceTag from '.';

export default {
  title: 'atoms/PriceTag',
  component: PriceTag,
  decorators: [withKnobs],
};
export const priceTag = () => {
  const value = number('value', 1000000);
  const size = select('size', ['normal', 'big', 'small'], 'normal');
  const bold = select('bold', [true, false], true);
  const color = select('color', ['black', 'gray', '#f00'], 'black');
  return <PriceTag value={value} size={size} bold={bold} color={color} />;
};
