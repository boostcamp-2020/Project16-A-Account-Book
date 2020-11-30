import React from 'react';
import CircleSvg from 'components/atoms/CircleSvg';

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
  circumference() {
    return 2 * Math.PI * circle.r;
  },
  transform() {
    const moveX = circle.r * 4 * -1;
    return `rotate(-90) translate(${moveX})`;
  },
};
const circumference = circle.circumference();

const accumulatePercent = (plainPieces: Piece[]) => {
  interface IAcc {
    sumPercent: number;
    accumulatedPieces: Piece[];
  }
  const { accumulatedPieces } = plainPieces.reduce(
    (acc: IAcc, piece: Piece): IAcc => {
      const sumPercent = acc.sumPercent + piece.percent;
      const summedPiece = { ...piece, percent: sumPercent };
      return {
        sumPercent,
        accumulatedPieces: [...acc.accumulatedPieces, summedPiece],
      };
    },
    {
      sumPercent: 0,
      accumulatedPieces: [],
    },
  );
  return accumulatedPieces;
};

const comparePercent = (a: Piece, b: Piece): number => {
  if (a.percent > b.percent) return -1;
  if (a.percent < b.percent) return 1;
  return 0;
};

const getDrawingOrderedPieces = (pieces: Piece[]) => {
  const basePiece = { color: 'lightgrey', percent: 100 };
  const descOrderPieces = pieces.sort(comparePercent);
  const accumulatedPieces = accumulatePercent(descOrderPieces);
  return [basePiece, ...accumulatedPieces.reverse()];
};

const PieChart = ({ pieces }: Props): React.ReactElement => {
  const drawingOrderedPieces = getDrawingOrderedPieces(pieces.slice(0, 5));
  return (
    <svg width="40" height="40">
      <g
        fill="transparent"
        strokeWidth={circle.strokeWidth()}
        transform={circle.transform()}
      >
        {drawingOrderedPieces.map(({ color, percent }: Piece) => {
          const strokeDasharray = `${
            (percent * circumference) / 100
          } ${circumference}`;
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
