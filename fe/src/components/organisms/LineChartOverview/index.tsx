import React from 'react';
import LineChart from 'components/molecules/LineChart';
import NodataMessage from 'components/molecules/NoDataMessage';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import { IDateTotalprice } from 'types';
import dateUtils from 'utils/date';
import theme from 'styles/theme';
import * as S from './style';

const checkDataIfScarce = (dataList: IDateTotalprice[]) => dataList.length <= 1;
const checkAllZeroPrice = (dataList: IDateTotalprice[]) =>
  dataList.every((data) => data.totalPrice === 0);

const formalizeDate = (dataList: IDateTotalprice[]) => {
  if (dataList.length === 0) return [];
  const YEAR_FORMAT = 'YYYY';
  const yearOfFirstData = dateUtils.dateCustomFormatter(
    dataList[0].date,
    YEAR_FORMAT,
  );
  const yearOfLastData = dateUtils.dateCustomFormatter(
    dataList[dataList.length - 1].date,
    YEAR_FORMAT,
  );
  const FORMAT = yearOfFirstData !== yearOfLastData ? 'YY.MM.DD' : 'MM.DD';
  return dataList.map((data) => ({
    ...data,
    date: dateUtils.dateCustomFormatter(data.date, FORMAT),
  }));
};
const noData = [
  { date: '', totalPrice: 10 },
  { date: '', totalPrice: 4 },
  { date: '', totalPrice: 30 },
  { date: '', totalPrice: 5 },
  { date: '', totalPrice: 40 },
  { date: '', totalPrice: 10 },
  { date: '', totalPrice: 70 },
];

const WarningMessage = (
  <>
    <LineChart
      width={250}
      height={100}
      data={noData}
      color={theme.color.subText}
      horizontalGuides={5}
    />
    <NodataMessage />
  </>
);

const LineChartOverview = (): React.ReactElement => {
  const dataList = TransactionStore.totalExpensePriceByDate;
  const suitableForRendering =
    !checkDataIfScarce(dataList) && !checkAllZeroPrice(dataList);
  return (
    <div>
      <S.StatisticsTitle>지출 추이</S.StatisticsTitle>
      {suitableForRendering ? (
        <LineChart
          width={250}
          height={100}
          data={formalizeDate(dataList)}
          horizontalGuides={Math.min(dataList.length, 5)}
        />
      ) : (
        WarningMessage
      )}
    </div>
  );
};

export default observer(LineChartOverview);
