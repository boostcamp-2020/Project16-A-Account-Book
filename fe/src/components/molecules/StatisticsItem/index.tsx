import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
import { ICategoryStatistics } from 'types';
import * as S from './style';

const StatisticsItem = ({
  category,
}: {
  category: ICategoryStatistics;
}): React.ReactElement => {
  const { title, color, totalPrice, percent } = category;
  const percentText = `${percent || 0}%`;
  return (
    <S.StatisticsItem>
      <S.StatisticsData>
        <S.Color color={color} />
        <div>{title}</div>
        <div className="statistics-data__percent">{percentText}</div>
      </S.StatisticsData>
      <PriceTag value={totalPrice} />
    </S.StatisticsItem>
  );
};

export default StatisticsItem;
