import React from 'react';
import PriceTag from '.';

export default {
  title: 'atoms/PriceTag',
  component: PriceTag,
};

export const BlodPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold size="normal" />;
};
export const NotBlodPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" />;
};
export const BigPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="big" />;
};
export const NormalPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" />;
};
export const smallPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="small" />;
};
export const ColorPriceTagComponent = (): React.ReactElement => {
  return <PriceTag value={10000000} bold={false} size="normal" color="gray" />;
};
