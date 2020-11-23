import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
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

      <div className="total-container">
        <div className="total-container__box">
          <div className="total-container__title">수입</div>
          <PriceTag color="white" value={total.income} bold />
        </div>

        <div className="total-container__box">
          <div className="total-container__title">지출</div>
          <PriceTag color="white" value={total.expense} bold />
        </div>
      </div>

      <MonthButton onClick={() => {}} size="md">
        채팅
      </MonthButton>
    </MonthInfoHeaderContainer>
  );
};

export default MonthInfoHeader;
