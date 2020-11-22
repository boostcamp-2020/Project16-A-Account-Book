import React, { useCallback } from 'react';
import { Button } from './style';

export interface Props {
  size?: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const App = ({ size, title, onClick, ...props }: Props) => {
  const onClickHandler = onClick ? useCallback(onClick!, []) : undefined;

  return (
    <Button size={size} onClick={onClickHandler} {...props}>
      {title}
    </Button>
  );
};

export default App;
