import React from 'react';
import CircleSvg from 'components/atoms/CircleSvg';
import math from 'utils/math';

export interface Piece {
  color: string;
  percent: number;
}
export interface Props {
  pieces: Piece[];
}
const circle = {
  r: 10,
  cx: 20,
  cy: 20,
  strokeWidth() {
    return circle.r * 2;
  },
  transform() {
    const moveX = circle.r * 4 * -1;
    return `rotate(-90) translate(${moveX})`;
  },
};
const circumference = 2 * Math.PI * circle.r;

const getBasePiece = (allPieces: Piece[]) => {
  const sumPercent = math.sumByKey(allPieces, 'percent');
  return { color: 'lightgrey', percent: 100 - sumPercent };
};
const getDrawingOrderedPieces = (pieces: Piece[]) => {
  const ascOrderPieces = pieces.sort(math.compByKey('percent'));
  const basePiece = getBasePiece(ascOrderPieces);
  return [basePiece, ...ascOrderPieces];
};

const PieChart = ({ pieces }: Props): React.ReactElement => {
  const drawingOrderedPieces = getDrawingOrderedPieces(pieces.slice(0, 5));
  let totalPercent = 100;

  return (
    <svg width="40" height="40">
      <g
        fill="transparent"
        strokeWidth={circle.strokeWidth()}
        transform={circle.transform()}
      >
        {drawingOrderedPieces.map(({ color, percent }: Piece) => {
          const strokeDasharray = `${
            (totalPercent * circumference) / 100
          } ${circumference}`;
          totalPercent -= percent;

          return (
            <CircleSvg
              r={circle.r}
              cx={circle.cx}
              cy={circle.cy}
              stroke={color}
              strokeDasharray={strokeDasharray}
              key={color + strokeDasharray}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default PieChart;
