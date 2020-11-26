import React from 'react';
import SInput from './style';

export interface Props {
  id?: string;
  name?: string;
  onChangeHandler?: any;
  onClick?: any;
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
  onClick,
  type,
  name,
  id,
  ...props
}: Props): React.ReactElement => {
  return (
    <SInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChangeHandler}
      onClick={onClick}
      value={value}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
