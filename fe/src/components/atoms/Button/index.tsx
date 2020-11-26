import React, { useCallback } from 'react';
import { ButtonStyle } from './style';

export interface Props {
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactElement | React.ReactElement[] | string;
}

const Button = ({ size, onClick, children, ...props }: Props) => {
  const onClickHandler = onClick ? useCallback(onClick!, []) : undefined;

  return (
    <ButtonStyle size={size} onClick={onClickHandler} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
