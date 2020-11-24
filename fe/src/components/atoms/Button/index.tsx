import React, { useCallback } from 'react';
import { Button } from './style';

export interface Props {
  size?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactElement | string;
}

const App = ({ size, onClick, children, ...props }: Props) => {
  const onClickHandler = onClick ? useCallback(onClick!, []) : undefined;

  return (
    <Button size={size} onClick={onClickHandler} {...props}>
      {children}
    </Button>
  );
};

export default App;
