import React from 'react';
import TotalBox from 'components/molecules/TotalBox';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import dateUtils from 'utils/date';
import DateRange from 'components/molecules/DateRange';
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

type Params = {
  title: string;
  owner: string;
};

const MonthInfoHeader = ({
  date = {
    startDate: TransactionStore.getDates().startDate,
    endDate: dateUtils.subTractDate(TransactionStore.getDates().endDate),
  },
  total = TransactionStore.totalPrices,
}: MonthInfoHeaderInterface) => {
  const { title, owner } = useParams<Params>();
  const baseUrl = `/transactions/${owner}/${title}`;
  return (
    <MonthInfoHeaderContainer>
      <DateRange dates={date} />
      <div>
        <TotalBox title="수입" total={total.income} />
        <TotalBox title="지출" total={total.expense} />
      </div>
      <Link to={`${baseUrl}/chatting`}>
        <MonthButton onClick={() => {}} size="md">
          채팅
        </MonthButton>
      </Link>
    </MonthInfoHeaderContainer>
  );
};

export default observer(MonthInfoHeader);
