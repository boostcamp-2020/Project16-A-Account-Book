import React from 'react';
import StatisticsList from 'components/organisms/StatisticsList';
import PieChart from 'components/molecules/PieChart';
import Checkbox from 'components/molecules/Checkbox';
import PriceTag from 'components/atoms/PriceTag';
import { ICategoryStatistics, ITotalPrice } from 'types';
import * as S from './style';

export interface Props {
  categories: ICategoryStatistics[];
  totalPrice: ITotalPrice;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  checkStatus: {
    income: boolean;
    expense: boolean;
  };
}
const PieChartDetail = ({
  categories,
  totalPrice,
  checkStatus,
  onClick,
}: Props): React.ReactElement => {
  const TotalStatusCheckBox = (
    <S.TotalStatusCheckBox>
      <div className="total-checkbox-wrap">
        <Checkbox checked={checkStatus.income} onClick={onClick} />
        수입
        <PriceTag value={totalPrice.income} />
      </div>
      <div className="total-checkbox-wrap">
        <Checkbox checked={checkStatus.expense} onClick={onClick} />
        지출
        <PriceTag value={totalPrice.expense} />
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
