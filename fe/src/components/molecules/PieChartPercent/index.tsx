import React from 'react';
import theme from 'styles/theme';

export interface Props {
  size: number;
  largestPiece: any;
  circleInfo: any;
}

const PieChartPercent = ({
  size,
  largestPiece,
  circleInfo,
}: Props): React.ReactElement => {
  const text = {
    x() {
      return circleInfo.r + circleInfo.cx;
    },
    y(percent: number) {
      const adjustedPercent = percent > 50 ? 100 - percent : percent;
      return adjustedPercent + circleInfo.r;
    },
  };
  const circle = {
    r() {
      return circleInfo.r / 2;
    },
    cx() {
      return text.x() + circleInfo.r / 3;
    },
    cy() {
      return text.y(largestPiece.percent);
    },
  };
  return (
    <svg width={size} height={size}>
      <circle
        r={circle.r()}
        cx={circle.cx()}
        cy={circle.cy()}
        fill="white"
        stroke="lightgrey"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <text
        x={text.x()}
        y={text.y(largestPiece.percent)}
        fill={theme.color.brandColor}
        fontSize="1rem"
      >
        {`${largestPiece.percent}%`}
      </text>
    </svg>
  );
};

export default PieChartPercent;
