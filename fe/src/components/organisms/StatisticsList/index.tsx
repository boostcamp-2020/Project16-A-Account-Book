import React from 'react';
import StatisticsItem from 'components/molecules/StatisticsItem';
import { ICategoryStatistics } from 'types';

export interface Props {
  categories: ICategoryStatistics[];
}
const StatisticsList = ({ categories }: Props): React.ReactElement => {
  return (
    <>
      {categories.map((category) => (
        <StatisticsItem category={category} key={category._id} />
      ))}
    </>
  );
};

export default StatisticsList;
