import React, { FC, useCallback } from 'react';
import { Button } from './style';

export interface Props {
  title?: string;
  bgColor?: string;
  color?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  border?: string;
}

const App: FC<Props> = ({
  title,
  bgColor,
  color,
  width,
  height,
  fontSize,
  border,
}) => {
  const onClickHandler = useCallback(() => {}, []);

  return (
    <>
      <Button
        bgColor={bgColor}
        color={color}
        width={width}
        height={height}
        fontSize={fontSize}
        border={border}
        onClick={onClickHandler}
      >
        {title}
      </Button>
    </>
  );
};

export default App;
