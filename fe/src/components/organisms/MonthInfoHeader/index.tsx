import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
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
  const incomeMoney = `${total.income}원`;
  const expenseMoney = `${total.expense}원`;
  return (
    <S.MonthInfoHeaderContainer>
      <S.DateRangeBox dates={date} disabled />
      <S.MoneyInfo>
        <div className="category-type income">
          <div className="category-type__title ">수입</div>
          <div className="total-money">{incomeMoney}</div>
        </div>
        <div className="category-type expense">
          <div className="category-type__title">지출</div>
          <div className="total-money">{expenseMoney}</div>
        </div>
      </S.MoneyInfo>
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
