import React from 'react';
import DatePicker from 'components/atoms/DatePicker';
import * as S from './style';

export interface IDateRange {
  dates: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onChange?: any;
  disabled?: boolean;
}

const DateRange = ({ dates, onChange, disabled = false }: IDateRange) => {
  return (
    <S.DecsContainer>
      <div>
        <S.Small>시작일</S.Small>
        <div className="date-container">
          <DatePicker
            date={dates.startDate}
            name="startDate"
            disabled={disabled}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <S.Small>마지막일</S.Small>
        <div className="date-container">
          <DatePicker
            date={dates.endDate}
            name="endDate"
            onChange={onChange}
            disabled={disabled}
          />
        </div>
      </div>
    </S.DecsContainer>
  );
};
export default DateRange;
