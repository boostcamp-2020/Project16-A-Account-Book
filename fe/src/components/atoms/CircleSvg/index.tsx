import React from 'react';
import { Circle } from './style';

export interface Props {
  r: number;
  cx: number;
  cy: number;
  stroke?: string;
  strokeDasharray?: string;
  fill?: string;
  strokeWidth?: number;
  transform?: string;
}
const CircleSvg = ({
  r,
  cx,
  cy,
  stroke,
  strokeDasharray,
  fill,
  strokeWidth,
  transform,
  ...props
}: Props): React.ReactElement => {
  return (
    <Circle
      r={r}
      cx={cx}
      cy={cy}
      stroke={stroke}
      sd={strokeDasharray}
      fill={fill}
      {...props}
    />
  );
};

export default CircleSvg;
