import React, { useCallback } from 'react';
import { ButtonStyle } from './style';

export interface Props {
  size?: string;
  value?: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
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
      {...props}
      type="button"
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
