import React from 'react';
import { useHistory } from 'react-router-dom';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import useStatistics from 'hooks/useStatistics';
import PieChartOverview from 'components/organisms/PieChartOverview';
import LineChartOverview from 'components/organisms/LineChartOverview';

const StatisticsPage = ({ location }: { location: any }) => {
  const statistics = useStatistics();
  const history = useHistory();
  const moveToStatisticDetailPage = () =>
    history.push(`${location.pathname}/detail`);

  const SubHeaderBar = <MonthInfo />;

  const Contents = (
    <>
      <PieChartOverview
        categories={statistics.expenseCategories}
        onClick={moveToStatisticDetailPage}
      />
      <LineChartOverview />
    </>
  );

  return (
    <Template
      HeaderBar={<Header />}
      SubHeaderBar={SubHeaderBar}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default StatisticsPage;
