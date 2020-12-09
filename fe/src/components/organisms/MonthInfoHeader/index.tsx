import React from 'react';
import TotalBox from 'components/molecules/TotalBox';
import { Link, useParams } from 'react-router-dom';
import { MonthInfoHeaderContainer, MonthButton } from './style';

interface MonthInfoHeaderInterface {
  month: number;
  total: {
    income: number;
    expense: number;
  };
}

type Params = {
  title: string;
  owner: string;
};

const MonthInfoHeader = ({ month, total }: MonthInfoHeaderInterface) => {
  const { title, owner } = useParams<Params>();
  const baseUrl = `/transactions/${owner}/${title}`;
  return (
    <MonthInfoHeaderContainer>
      <MonthButton onClick={() => {}} size="xl" border>
        {`${month}월 ▾`}
      </MonthButton>

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

export default MonthInfoHeader;
