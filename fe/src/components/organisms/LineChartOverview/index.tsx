import React from 'react';
import LineChart from 'components/molecules/LineChart';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
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

const LineChartOverview = (): React.ReactElement => {
  const dataList = addDataIfScarce(TransactionStore.totalExpensePriceByDate);
  const formattedDataList = dataList.map((data) => ({
    ...data,
    date: dayjs(data.date).format('MM/DD'),
  }));
  const EmptyData = <div>소비를 하지 않으셨네요!</div>;

  return (
    <div>
      <S.StatisticsTitle>지출 추이</S.StatisticsTitle>
      {isAllZeroPrice(dataList) ? (
        EmptyData
      ) : (
        <LineChart
          width={200}
          height={150}
          data={formattedDataList}
          horizontalGuides={Math.min(dataList.length, 5)}
        />
      )}
    </div>
  );
};

export default observer(LineChartOverview);
