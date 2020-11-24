import React from 'react';
import SInput from './style';

export interface Props {
  onChangeHandler: any;
  disabled?: boolean;
  placeholder?: string;
  value?: any;
  type?: string;
}

const Input = ({
  placeholder,
  disabled,
  value,
  onChangeHandler,
  type,
}: Props): React.ReactElement => {
  return (
    <SInput
      placeholder={placeholder}
      type={type}
      onChange={onChangeHandler}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
