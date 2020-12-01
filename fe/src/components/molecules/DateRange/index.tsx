import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import * as S from './style';

export interface IDateRange {
  dates: {
    startDate: Date;
    endDate: Date | null;
  };
}

const DateRange = ({ dates }: IDateRange) => {
  return (
    <S.DecsContainer>
      <div>
        <S.Small>시작일</S.Small>
        <p>{dayjs(dates.startDate).format('YY-MM-DD')}</p>
      </div>
      <div>
        <S.Small>마지막일</S.Small>
        <p>{dates.endDate && dayjs(dates.endDate).format('YY-MM-DD')}</p>
      </div>
    </S.DecsContainer>
  );
};
export default DateRange;
