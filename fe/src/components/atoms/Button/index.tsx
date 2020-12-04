import React, { useCallback } from 'react';
import { ButtonStyle } from './style';

export interface Props {
  size?: string;
  value?: string | number;
  onClick?: any;
  children?: React.ReactElement | React.ReactElement[] | string;
  disabled?: boolean;
}

const Button = ({
  size,
  disabled = false,
  value,
  onClick,
  children,
  ...props
}: Props) => {
  const onClickHandler = onClick ? useCallback(onClick!, []) : undefined;

  return (
    <ButtonStyle
      size={size}
      value={value}
      onClick={onClickHandler}
      type="button"
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
