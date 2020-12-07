import React, { useState, useCallback } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import useStatistics from 'hooks/useStatistics';
import PieChartDetail from 'components/organisms/PieChartDetail';

const StatisticsDetailPage = () => {
  const statistics = useStatistics();
  const [showType, setShowType] = useState({
    income: false,
    expense: true,
  });
  const toggleType = useCallback(() => {
    setShowType((prevShowType) => ({
      income: !prevShowType.income,
      expense: !prevShowType.expense,
    }));
  }, []);
  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={TransactionStore.totalPrices}
    />
  );
  const Contents = (
    <PieChartDetail
      statistics={statistics}
      checkStatus={showType}
      onClick={toggleType}
    />
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

export default observer(StatisticsDetailPage);
