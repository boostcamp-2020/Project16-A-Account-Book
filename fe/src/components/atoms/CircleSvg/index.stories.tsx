import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CircleSvg from '.';

export default {
  title: 'Atoms / CircleSvg',
};

export const PieChartPiece = () => {
  return (
    <GlobalThemeProvider>
      <svg width="40" height="40">
        <g
          fill="transparent"
          strokeWidth="20"
          transform="rotate(-90) translate(-40)"
        >
          <CircleSvg
            r={10}
            cx={20}
            cy={20}
            stroke="pink"
            strokeDasharray="calc(80 * calc(2*3.14*10) / 100) calc(2*3.14*10)"
          />
        </g>
      </svg>
    </GlobalThemeProvider>
  );
};
