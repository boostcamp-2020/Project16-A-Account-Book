import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import * as S from './style';

export interface IDateRange {
  dates: {
    startDate: Date | null;
    endDate: Date | null;
  };
}

const DateRange = ({ dates }: IDateRange) => {
  return (
    <S.DecsContainer>
      <div>
        <S.Small>시작일</S.Small>
        <div>
          {dates.startDate && dayjs(dates.startDate).format('YY-MM-DD')}
        </div>
      </div>
      <div>
        <S.Small>마지막일</S.Small>
        <div>{dates.endDate && dayjs(dates.endDate).format('YY-MM-DD')}</div>
      </div>
    </S.DecsContainer>
  );
};
export default DateRange;
