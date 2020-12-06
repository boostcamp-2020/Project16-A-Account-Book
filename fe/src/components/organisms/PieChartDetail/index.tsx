import React from 'react';
import StatisticsList from 'components/organisms/StatisticsList';
import PieChart from 'components/molecules/PieChart';
import Checkbox from 'components/molecules/Checkbox';
import PriceTag from 'components/atoms/PriceTag';
import { IStatistics } from 'types';
import * as S from './style';

export interface Props {
  statistics: IStatistics;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  checkStatus: {
    income: boolean;
    expense: boolean;
  };
}
const PieChartDetail = ({
  statistics,
  checkStatus,
  onClick,
}: Props): React.ReactElement => {
  const categories = checkStatus.income
    ? statistics.incomeCategories
    : statistics.expenseCategories;

  const TotalStatusCheckBox = (
    <S.TotalStatusCheckBox>
      <div className="total-checkbox-wrap">
        <Checkbox checked={checkStatus.income} onClick={onClick} />
        수입
        <PriceTag value={statistics.totalPrice.income} />
      </div>
      <div className="total-checkbox-wrap">
        <Checkbox checked={checkStatus.expense} onClick={onClick} />
        지출
        <PriceTag value={statistics.totalPrice.expense} />
      </div>
    </S.TotalStatusCheckBox>
  );
  return (
    <>
      <S.StatisticsTitle>통계</S.StatisticsTitle>
      {TotalStatusCheckBox}
      <S.PieChartWrap>
        <PieChart pieces={categories} />
      </S.PieChartWrap>
      <StatisticsList categories={categories} />
    </>
  );
};

export default PieChartDetail;
