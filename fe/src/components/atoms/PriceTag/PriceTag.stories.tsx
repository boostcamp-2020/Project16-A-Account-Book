import React from 'react';
import PriceTag from '.';

export default {
  title: 'atoms/PriceTag',
  component: PriceTag,
};

export const BoldPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold size="normal" color="#000" />;
};
export const NotBlodPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" color="#000" />;
};
export const BigPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="big" color="#000" />;
};
export const NormalPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" color="#000" />;
};
export const smallPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="small" color="#000" />;
};
export const ColorPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" color="gray" />;
};
