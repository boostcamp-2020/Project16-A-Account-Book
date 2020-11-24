import React from 'react';
import PriceContainer from './style';

interface Props {
  value: number;
  bold?: boolean;
  size?: string;
  color?: string;
}

const PriceTag: React.FC<Props> = ({
  value,
  bold = false,
  size = 'normal',
  color = '#000',
  ...props
}): React.ReactElement => {
  return (
    <PriceContainer bold={bold} size={size} color={color} {...props}>
      {`${value.toLocaleString()}원`}
    </PriceContainer>
  );
};

export default PriceTag;
