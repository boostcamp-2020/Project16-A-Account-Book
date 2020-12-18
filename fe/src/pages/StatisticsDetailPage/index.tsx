import React, { useState, useCallback, useEffect } from 'react';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import PieChartDetail from 'components/organisms/PieChartDetail';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';

const StatisticsDetailPage = () => {
  useEffect(() => {
    TransactionStore.loadTransactions();
  }, []);
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
      total={TransactionStore.totalPricesExceptFilterAndUnclassified}
    />
  );
  const Contents = (
    <PieChartDetail
      statistics={TransactionStore.pieChartStatistics}
      checkStatus={showType}
      onClick={toggleType}
    />
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

export default observer(StatisticsDetailPage);
