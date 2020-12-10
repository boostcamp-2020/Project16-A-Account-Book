import React from 'react';
import { IDateTotalprice } from 'types';
import theme from 'styles/theme';
import utils from 'utils';

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
}
const LineChart = ({
  data,
  height,
  width,
  horizontalGuides: numberOfHorizontalGuides,
}: Props) => {
  const FONT_SIZE = width / 60;
  const maximumXFromData = data.length;
  const maximumYFromData = Math.max(...data.map((e) => e.totalPrice));
  const digits = utils.moneyFormatter(maximumYFromData).length;

  const paddingWidth = (FONT_SIZE + digits) * 3;
  const paddingHeight = FONT_SIZE * 3;
  const chartWidth = width - paddingWidth * 2;
  const chartHeight = height - paddingHeight * 2;
  const getXpos = (ratio: number) => ratio * chartWidth + paddingWidth;
  const getYpos = (ratio: number) =>
    chartHeight - ratio * chartHeight + paddingHeight;
  const points = data
    .map((element, index) => {
      const x = getXpos(index / maximumXFromData);
      const y = getYpos(element.totalPrice / maximumYFromData);
      return `${x},${y}`;
    })
    .join(' ');
  const xAxisPos = {
    x: {
      start: paddingWidth,
      end: chartWidth + paddingWidth,
    },
    y: height - paddingHeight,
  };
  const yAxisPos = {
    x: paddingWidth,
    y: {
      start: paddingHeight,
      end: height - paddingHeight,
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
    const y = yAxisPos.y.end + FONT_SIZE * 2;
    const dateLength = data[0].date.length;
    const labelLength = (FONT_SIZE + dateLength) * 1.5;
    let lastPrintedX = 0;
    return (
      <>
        {data.map((element, index) => {
          const ratio = index / maximumXFromData;
          const x = getXpos(ratio) - FONT_SIZE;
          const printTarget = x >= lastPrintedX;
          if (printTarget) {
            lastPrintedX = Math.ceil(x + labelLength);
          }

          return (
            printTarget && (
              <text key={`label-x-${x}`} x={x} y={y} style={labelStyle}>
                {element.date}
              </text>
            )
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
              {utils.moneyFormatter(
                Math.round(maximumYFromData * (index / PARTS)),
              )}
            </text>
          );
        })}
      </>
    );
  };

  const LabelLineInfo = () => {
    const startX = xAxisPos.x.start;
    const endX = xAxisPos.x.start + STROKE * 2;
    const y = paddingHeight - FONT_SIZE;
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
