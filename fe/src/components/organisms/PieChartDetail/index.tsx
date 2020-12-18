import React from 'react';
import StatisticsList from 'components/organisms/StatisticsList';
import PieChart from 'components/molecules/PieChart';
import Checkbox from 'components/molecules/Checkbox';
import PriceTag from 'components/atoms/PriceTag';
import NoDataPieChartContents from 'components/molecules/NoDataPieChartContents';
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
      <S.TotalCheckboxWrap>
        <Checkbox checked={checkStatus.income} onClick={onClick} />
        <S.PriceWrap className="income">
          <span className="category-type">수입</span>
          <PriceTag value={statistics.totalPrice.income} />
        </S.PriceWrap>
      </S.TotalCheckboxWrap>
      <S.TotalCheckboxWrap className="income">
        <Checkbox checked={checkStatus.expense} onClick={onClick} />
        <S.PriceWrap className="expense">
          <span className="category-type">지출</span>
          <PriceTag value={statistics.totalPrice.expense} />
        </S.PriceWrap>
      </S.TotalCheckboxWrap>
    </S.TotalStatusCheckBox>
  );
  return (
    <>
      <S.StatisticsTitle>통계</S.StatisticsTitle>
      {TotalStatusCheckBox}
      {categories.length === 0 ? (
        <NoDataPieChartContents />
      ) : (
        <S.PieChartWrap>
          <PieChart pieces={categories} />
        </S.PieChartWrap>
      )}

      <StatisticsList categories={categories} />
    </>
  );
};

export default PieChartDetail;
