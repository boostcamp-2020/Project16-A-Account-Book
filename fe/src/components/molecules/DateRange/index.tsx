import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import dateUtils from 'utils/date';
import * as S from './style';

export interface IDateRange {
  dates: {
    startDate: Date | string | null;
    endDate: Date | string | null;
  };
}

const DateRange = ({ dates }: IDateRange) => {
  return (
    <S.DecsContainer>
      <div>
        <S.Small>시작일</S.Small>
        <div>
          {dates.startDate &&
            dateUtils.dateCustomFormatter(dates.startDate, 'YY.MM.DD')}
        </div>
      </div>
      <div>
        <S.Small>마지막일</S.Small>
        <div>
          {dates.endDate &&
            dateUtils.dateCustomFormatter(dates.endDate, 'YY.MM.DD')}
        </div>
      </div>
    </S.DecsContainer>
  );
};
export default DateRange;
