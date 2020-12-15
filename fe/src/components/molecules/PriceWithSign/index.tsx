import React from 'react';
import { categoryType } from 'stores/Category';
import PriceTag, { Props } from 'components/atoms/PriceTag';
import * as S from './style';

export interface Prop extends Omit<Props, 'value'> {
  price: number;
  type: string;
}
const getPriceColor = (type: string) => {
  switch (type) {
    case categoryType.EXPENSE:
      return 'red';
    case categoryType.INCOME:
      return 'brandColor';
    default:
      return 'black';
  }
};

const PriceWithSign = ({ price, type, ...props }: Prop) => {
  const color = getPriceColor(type);
  return (
    <S.Price color={color}>
      {price === 0 ? '' : `+`}
      <PriceTag value={price} color={color} {...props} />
    </S.Price>
  );
};
export default PriceWithSign;
