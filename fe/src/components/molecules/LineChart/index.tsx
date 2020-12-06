import React from 'react';
import { IDateTotalprice } from 'types';
import theme from 'styles/theme';

const STROKE = 1;
const labelStyle = {
  fill: theme.color.subText,
  fontSize: STROKE * 4,
};
export interface Props {
  data: IDateTotalprice[];
  width: number;
  height: number;
  horizontalGuides: number;
  precision: number;
}
const LineChart = ({
  data,
  height,
  width,
  horizontalGuides: numberOfHorizontalGuides,
  precision,
}: Props) => {
  const FONT_SIZE = width / 60;
  const maximumXFromData = data.length;
  const maximumYFromData = Math.max(...data.map((e) => e.totalPrice));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const getXpos = (ratio: number) => ratio * chartWidth + padding;
  const getYpos = (ratio: number) =>
    chartHeight - ratio * chartHeight + padding;
  const points = data
    .map((element, index) => {
      const x = getXpos(index / maximumXFromData);
      const y = getYpos(element.totalPrice / maximumYFromData);
      return `${x},${y}`;
    })
    .join(' ');
  const xAxisPos = {
    x: {
      start: padding,
      end: chartWidth + padding / 2,
    },
    y: height - padding,
  };
  const yAxisPos = {
    x: padding,
    y: {
      start: padding,
      end: height - padding,
    },
  };

  const Axis = ({ pointsList }: { pointsList: string }) => (
    <polyline
      fill="none"
      stroke={theme.color.lightBorder}
      strokeWidth={STROKE / 4}
      points={pointsList}
    />
  );

  const XAxis = () => (
    <Axis
      pointsList={`${xAxisPos.x.start},${xAxisPos.y} ${xAxisPos.x.end},${xAxisPos.y}`}
    />
  );

  const YAxis = () => (
    <Axis
      pointsList={`${yAxisPos.x},${yAxisPos.y.start} ${yAxisPos.x},${yAxisPos.y.end}`}
    />
  );

  const HorizontalGuides = () => {
    return (
      <>
        {new Array(numberOfHorizontalGuides).fill(0).map((x, index) => {
          const ratio = (index + 1) / numberOfHorizontalGuides;
          const y = getYpos(ratio);

          return (
            <React.Fragment key={`horizon-y-${y}`}>
              <polyline
                fill="none"
                stroke={theme.color.lightBorder}
                strokeWidth={STROKE / 4}
                points={`${xAxisPos.x.start},${y} ${xAxisPos.x.end},${y}`}
              />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;
    return (
      <>
        {data.map((element, index) => {
          const ratio = index / maximumXFromData;
          const x = getXpos(ratio) - FONT_SIZE;
          return (
            <text key={`label-x-${x}`} x={x} y={y} style={labelStyle}>
              {element.date}
            </text>
          );
        })}
      </>
    );
  };

  const LabelsYAxis = () => {
    const PARTS = numberOfHorizontalGuides;
    return (
      <>
        {new Array(PARTS + 1).fill(0).map((_, index) => {
          const x = FONT_SIZE;
          const ratio = index / numberOfHorizontalGuides;
          const y = getYpos(ratio) + FONT_SIZE / 2;
          return (
            <text key={`label-y-${y}`} x={x} y={y} style={labelStyle}>
              {parseFloat(
                (maximumYFromData * (index / PARTS)).toString(),
              ).toFixed(precision)}
            </text>
          );
        })}
      </>
    );
  };

  const LabelYUnit = () => {
    const x = FONT_SIZE;
    const y = padding - FONT_SIZE;
    return (
      <text x={x} y={y} style={labelStyle}>
        (만원)
      </text>
    );
  };

  const LabelLineInfo = () => {
    const startX = xAxisPos.x.start;
    const endX = xAxisPos.x.start + STROKE * 2;
    const y = padding - FONT_SIZE;
    return (
      <>
        <polyline
          stroke={theme.color.brandColor}
          strokeWidth={STROKE}
          points={`${startX},${y} ${endX},${y}`}
        />
        <text
          x={endX + FONT_SIZE}
          y={y}
          fill={labelStyle.fill}
          fontSize={FONT_SIZE * 0.8}
        >
          지출 추이
        </text>
      </>
    );
  };
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <LabelYUnit />
      <XAxis />
      <LabelsXAxis />
      <YAxis />
      <LabelsYAxis />
      <HorizontalGuides />
      <LabelLineInfo />

      <polyline
        fill="none"
        stroke={theme.color.brandColor}
        strokeWidth={STROKE}
        points={points}
      />
    </svg>
  );
};

export default LineChart;
