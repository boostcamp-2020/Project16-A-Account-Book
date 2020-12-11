import React from 'react';
import PriceTag from 'components/atoms/PriceTag';

import TotalBoxContainer from './style';

export interface TotalInterface {
  title: string;
  total: number;
  color?: string;
}
const TotalBox = ({ title, total, color = 'black' }: TotalInterface) => {
  return (
    <TotalBoxContainer>
      <div className="total-box__title">{title}</div>
      <PriceTag color={color} value={total} bold />
    </TotalBoxContainer>
  );
};

export default TotalBox;
