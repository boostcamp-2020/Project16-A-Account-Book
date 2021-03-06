import React from 'react';
import CircleSvg from 'components/atoms/CircleSvg';
import math from 'utils/math';

interface PieceData {
  color: string;
  _id: string;
  percent: number;
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

const getBasePiece = (allPieces: PieceData[]) => {
  const sumPercent = math.sumByKey(allPieces, 'percent');
  return { color: '#EEEDED', percent: 100 - sumPercent };
};
const getDrawingOrderedPieces = (pieces: PieceData[]) => {
  const ascOrderPieces = pieces.sort(math.getCompFuncByKey('percent'));
  const basePiece = getBasePiece(ascOrderPieces);
  return [basePiece, ...ascOrderPieces];
};

const pieces = [
  {
    color: '#BBB8B9',
    _id: '1',
    percent: 40,
  },
  {
    color: '#C9C7C8',
    _id: '2',
    percent: 25,
  },
  {
    color: '#D7D5D6',
    _id: '3',
    percent: 15,
  },
  {
    color: '#E5E4E4',
    _id: '4',
    percent: 10,
  },
];

const PieChart = (): React.ReactElement => {
  const drawingOrderedPieces = getDrawingOrderedPieces(pieces.slice(0, 5));
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
    </svg>
  );
};

export default PieChart;
