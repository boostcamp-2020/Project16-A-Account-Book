import React from 'react';
import NoDataPieChart from 'components/molecules/NoDataPieChart';
import NoDataMessage from 'components/molecules/NoDataMessage';
import * as S from './style';

const NoDataPieChartContents = (): React.ReactElement => {
  return (
    <>
      <S.PieChartWrap>
        <NoDataPieChart />
      </S.PieChartWrap>
      <NoDataMessage />
    </>
  );
};

export default NoDataPieChartContents;
