import React from 'react';
import TotalBox from 'components/molecules/TotalBox';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import dateUtils from 'utils/date';
import { MonthInfoHeaderContainer, MonthButton } from './style';

interface MonthInfoHeaderInterface {
  date?: {
    startDate: string;
    endDate: string;
  };
  total?: {
    income: number;
    expense: number;
  };
}

const MonthInfoHeader = ({
  date = {
    startDate: TransactionStore.getDates().startDate,
    endDate: dateUtils.subTractDate(TransactionStore.getDates().endDate),
  },
  total = TransactionStore.totalPrices,
}: MonthInfoHeaderInterface) => {
  return (
    <MonthInfoHeaderContainer>
      <MonthButton onClick={() => {}} size="xl" border>
        <>
          {`시작 날짜 : ${date.startDate}`}
          {`끝 날짜 : ${date.endDate}`}
        </>
      </MonthButton>

      <div>
        <TotalBox title="수입" total={total.income} />
        <TotalBox title="지출" total={total.expense} />
      </div>

      <MonthButton onClick={() => {}} size="md">
        채팅
      </MonthButton>
    </MonthInfoHeaderContainer>
  );
};

export default observer(MonthInfoHeader);
