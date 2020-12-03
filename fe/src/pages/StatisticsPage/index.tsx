import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import { calTotalPrices } from 'stores/Transaction/transactionStoreUtils';
import useStatistics from 'hooks/useStatistics';
import PieChartOverview from 'components/organisms/PieChartOverview';

const StatisticsPage = () => {
  const statistics = useStatistics();
  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={calTotalPrices(toJS(TransactionStore.transactions))}
    />
  );

  return (
    <Template
      HeaderBar={<Header />}
      SubHeaderBar={SubHeaderBar}
      Contents={<PieChartOverview categories={statistics.expenseCategories} />}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(StatisticsPage);
