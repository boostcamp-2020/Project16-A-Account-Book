import React from 'react';
import LineChart from 'components/molecules/LineChart';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import { IDateTotalprice } from 'types';
import dateUtils from 'utils/date';
import * as S from './style';

const addDataIfScarce = (dataList: IDateTotalprice[]) => {
  if (dataList.length !== 1) {
    return dataList;
  }
  const nextDateData = {
    date: dateUtils.getNextDate(dataList[0].date),
    totalPrice: 0,
  };
  return [...dataList, nextDateData];
};
const isAllZeroPrice = (dataList: IDateTotalprice[]) =>
  dataList.every((data) => data.totalPrice === 0);

const formalizeDate = (dataList: IDateTotalprice[]) => {
  if (dataList.length < 1) return [];
  const YEAR_FORMAT = 'YYYY';
  const yearOfFirstData = dateUtils.dateCustomFormatter(
    dataList[0].date,
    YEAR_FORMAT,
  );
  const yearOfLastData = dateUtils.dateCustomFormatter(
    dataList[dataList.length - 1].date,
    YEAR_FORMAT,
  );
  const FORMAT = yearOfFirstData !== yearOfLastData ? 'YY/MM/DD' : 'MM/DD';
  return dataList.map((data) => ({
    ...data,
    date: dateUtils.dateCustomFormatter(data.date, FORMAT),
  }));
};

const LineChartOverview = (): React.ReactElement => {
  const dataList = addDataIfScarce(TransactionStore.totalExpensePriceByDate);
  const EmptyData = <div>소비를 하지 않으셨네요!</div>;

  return (
    <div>
      <S.StatisticsTitle>지출 추이</S.StatisticsTitle>
      {dataList.length > 0 && isAllZeroPrice(dataList) ? (
        EmptyData
      ) : (
        <LineChart
          width={250}
          height={100}
          data={formalizeDate(dataList)}
          horizontalGuides={Math.min(dataList.length, 5)}
        />
      )}
    </div>
  );
};

export default observer(LineChartOverview);
