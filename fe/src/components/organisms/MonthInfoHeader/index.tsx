import React from 'react';
import PriceTag from 'components/atoms/PriceTag';
import { MonthInfoHeaderContainer, MonthButton } from './style';

const MonthInfoHeader = () => {
  return (
    <MonthInfoHeaderContainer>
      <MonthButton onClick={() => {}} size="xl" border>
        11월 ▾
      </MonthButton>

      <div className="total-container">
        <div className="total-container__box">
          <div className="total-container__title">수입</div>
          <PriceTag color="white" value={1000} bold />
        </div>

        <div className="total-container__box">
          <div className="total-container__title">지출</div>
          <PriceTag color="white" value={1000} bold />
        </div>
      </div>

      <MonthButton onClick={() => {}} size="md">
        채팅
      </MonthButton>
    </MonthInfoHeaderContainer>
  );
};

export default MonthInfoHeader;
