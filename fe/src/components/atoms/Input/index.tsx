import React from 'react';
import SInput from './style';

interface Props {
  disabled: boolean;
  color: string;
  placeholder: string;
  defaultValue: string;
  onChangeHandler: any;
}

const Input: React.FC<Props> = ({
  color = 'white',
  placeholder,
  disabled,
  defaultValue,
  onChangeHandler,
}): React.ReactElement => {
  return (
    <SInput
      color={color}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
