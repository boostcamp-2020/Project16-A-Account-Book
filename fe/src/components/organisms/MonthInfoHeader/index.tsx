import React from 'react';
import TotalBox from 'components/molecules/TotalBox';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import DateRange from 'components/molecules/DateRange';
import dayjs from 'dayjs';
import { ChattingStore } from 'stores/Chatting';
import * as S from './style';

interface MonthInfoHeaderInterface {
  date?: any;
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
    startDate: TransactionStore.getOriginDates().startDate,
    endDate: dayjs(TransactionStore.getDates().endDate)
      .subtract(1, 'date')
      .toDate(),
  },
  total = TransactionStore.totalPrices,
}: MonthInfoHeaderInterface) => {
  const { title, owner } = useParams<Params>();
  const baseUrl = `/transactions/${owner}/${title}`;
  return (
    <S.MonthInfoHeaderContainer>
      <DateRange dates={date} disabled />
      <div>
        <TotalBox title="수입" total={total.income} />
        <TotalBox title="지출" total={total.expense} />
      </div>
      <Link to={`${baseUrl}/chatting`}>
        <S.MonthButton
          onClick={() => {
            ChattingStore.resetChattings();
          }}
        >
          채팅
        </S.MonthButton>
      </Link>
    </S.MonthInfoHeaderContainer>
  );
};

export default observer(MonthInfoHeader);
