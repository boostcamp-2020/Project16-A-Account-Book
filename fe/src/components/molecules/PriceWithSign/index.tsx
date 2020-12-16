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
const getSigin = ({ type, price }: { type: string; price: number }) => {
  if (price === 0) return '';
  switch (type) {
    case categoryType.EXPENSE:
      return '-';
    case categoryType.INCOME:
      return '+';
    default:
      return '';
  }
};
const PriceWithSign = ({ price, type, ...props }: Prop) => {
  const color = getPriceColor(type);
  const sign = getSigin({ type, price });
  return (
    <S.Price color={color}>
      {sign}
      <PriceTag value={price} color={color} {...props} />
    </S.Price>
  );
};
export default PriceWithSign;
