import React from 'react';
import CircleSvg from 'components/atoms/CircleSvg';
import math from 'utils/math';
import { ICategoryStatistics } from 'types';
import PieChartPercent from 'components/molecules/PieChartPercent';

export interface Props {
  pieces: ICategoryStatistics[];
}

const SIZE = 160;
const circle = {
  r: SIZE / 4,
  cx: SIZE / 2,
  cy: SIZE / 2,
  strokeWidth() {
    return circle.r;
  },
  transform() {
    const doubleDiameter = circle.r * 4;
    const down = -1;
    const moveX = doubleDiameter * down;
    return `rotate(-90) translate(${moveX})`;
  },
};

const circumference = 2 * Math.PI * circle.r;

const getBasePiece = (allPieces: ICategoryStatistics[]) => {
  const sumPercent = math.sumByKey(allPieces, 'percent');
  return { color: 'lightgrey', percent: 100 - sumPercent };
};
const getDrawingOrderedPieces = (pieces: ICategoryStatistics[]) => {
  const ascOrderPieces = pieces.sort(math.getCompFuncByKey('percent'));
  const basePiece = getBasePiece(ascOrderPieces);
  return [basePiece, ...ascOrderPieces];
};

const PieChart = ({ pieces }: Props): React.ReactElement => {
  const drawingOrderedPieces = getDrawingOrderedPieces(pieces.slice(0, 5));
  const largestPiece = drawingOrderedPieces[drawingOrderedPieces.length - 1];
  let totalPercent = 100;

  return (
    <svg width={SIZE} height={SIZE}>
      <g
        fill="transparent"
        strokeWidth={circle.strokeWidth()}
        transform={circle.transform()}
      >
        {drawingOrderedPieces.map(({ color, percent }) => {
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
      <PieChartPercent
        size={SIZE}
        largestPiece={largestPiece}
        circleInfo={circle}
      />
    </svg>
  );
};

export default PieChart;
