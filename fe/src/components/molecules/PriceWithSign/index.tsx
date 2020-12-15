import React from 'react';
import { categoryType } from 'stores/Category';
import * as S from './style';

export interface Prop {
  price: number;
  type: 'income' | 'expense' | 'unclassified';
  children?: any;
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

const PriceWithSign = ({ price, type, children }: Prop) => {
  const color = getPriceColor(type);
  return (
    <S.Price color={color}>
      {price === 0 ? '' : `+`}
      {children}
    </S.Price>
  );
};
export default PriceWithSign;
