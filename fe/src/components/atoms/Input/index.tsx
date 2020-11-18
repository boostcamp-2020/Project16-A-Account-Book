import React from 'react';
import SInput from './style';

interface Props {
  disabled: boolean;
  color: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({
  color = 'white',
  placeholder,
  disabled,
}): React.ReactElement => {
  return <SInput color={color} disabled={disabled} placeholder={placeholder} />;
};

export default Input;
