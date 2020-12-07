import React from 'react';
import { useHistory } from 'react-router-dom';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
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

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={TransactionStore.totalPrices}
    />
  );

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

export default observer(StatisticsPage);
