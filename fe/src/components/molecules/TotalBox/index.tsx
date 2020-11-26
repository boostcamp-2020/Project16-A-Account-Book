import React from 'react';
import PriceTag from 'components/atoms/PriceTag';

import TotalBoxContainer from './style';

export interface TotalInterface {
  title: string;
  total: number;
}
const TotalBox = ({ title, total }: TotalInterface) => {
  return (
    <TotalBoxContainer>
      <div className="total-box__title">{title}</div>
      <PriceTag color="white" value={total} bold />
    </TotalBoxContainer>
  );
};

export default TotalBox;
