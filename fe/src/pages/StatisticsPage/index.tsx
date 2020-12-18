import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import PieChartOverview from 'components/organisms/PieChartOverview';
import LineChartOverview from 'components/organisms/LineChartOverview';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';

const StatisticsPage = ({ location }: { location: any }) => {
  useEffect(() => {
    TransactionStore.loadTransactions();
  }, []);
  const history = useHistory();
  const moveToStatisticDetailPage = () =>
    history.push(`${location.pathname}/detail`);

  const SubHeaderBar = (
    <MonthInfo
      total={TransactionStore.totalPricesExceptFilterAndUnclassified}
    />
  );
  const Contents = (
    <>
      <PieChartOverview
        categories={TransactionStore.pieChartStatistics.expenseCategories}
        onClick={moveToStatisticDetailPage}
      />
      <LineChartOverview />
    </>
  );

  return (
    <Template
      HeaderBar={<Header title="통 계" />}
      SubHeaderBar={SubHeaderBar}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(StatisticsPage);
