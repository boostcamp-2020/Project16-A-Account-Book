import React from 'react';

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
    <circle
      r={r}
      cx={cx}
      cy={cy}
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      fill={fill}
      {...props}
    />
  );
};

export default CircleSvg;
