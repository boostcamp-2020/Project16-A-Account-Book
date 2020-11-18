import React, { FC, useCallback } from 'react';
import { Button, LocalLogin, OAuthLogin } from './style';

export interface Props {
  types: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  border?: string;
}

const App: FC<Props> = ({ types, title, onClick, ...props }) => {
  const onClickHandler = onClick ? useCallback(onClick!, []) : undefined;

  switch (types) {
    case 'localLogin':
      return (
        <>
          <LocalLogin types={types} onClick={onClickHandler} {...props}>
            {title}
          </LocalLogin>
        </>
      );
    case 'OAuthLogin':
      return (
        <>
          <OAuthLogin types={types} onClick={onClickHandler} {...props}>
            {title}
          </OAuthLogin>
        </>
      );
    default:
      return (
        <>
          <Button types={types} onClick={onClickHandler} {...props}>
            {title}
          </Button>
        </>
      );
  }
};

export default App;
