import React from 'react';
import TotalBox from 'components/molecules/TotalBox';
import { MonthInfoHeaderContainer, MonthButton } from './style';

interface MonthInfoHeaderInterface {
  month: number;
  total: {
    income: number;
    expense: number;
  };
}

const MonthInfoHeader = ({ month, total }: MonthInfoHeaderInterface) => {
  return (
    <MonthInfoHeaderContainer>
      <MonthButton onClick={() => {}} size="xl" border>
        {`${month}월 ▾`}
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

export default MonthInfoHeader;
