import React from 'react';
import StatisticsList from 'components/organisms/StatisticsList';
import PieChart from 'components/molecules/PieChart';
import { ICategoryStatistics } from 'types';
import * as S from './style';

export interface Props {
  categories: ICategoryStatistics[];
  onClick: any;
}
const PieChartOverview = ({
  categories,
  onClick,
}: Props): React.ReactElement => {
  const topFiveCategories = categories.slice(0, 5);
  return (
    <>
      <S.StatisticsTitle>통계</S.StatisticsTitle>
      <S.PieChartWrap>
        <PieChart pieces={topFiveCategories} />
      </S.PieChartWrap>
      <StatisticsList categories={topFiveCategories} />
      <S.TotalViewButton onClick={onClick}>전체보기</S.TotalViewButton>
    </>
  );
};

export default PieChartOverview;
