import React from 'react';
import * as S from './style';

export interface Props {
  isSundayStart: boolean;
}

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

const makeOneDayBlockList = (isSundayStart: boolean) => {
  if (isSundayStart) {
    return dayList.map((day) => {
      return <S.OneDayBlock key={day}>{day}</S.OneDayBlock>;
    });
  }
  return (
    <>
      {dayList.slice(1).map((day) => {
        return <S.OneDayBlock key={day}>{day}</S.OneDayBlock>;
      })}
      <S.OneDayBlock>일</S.OneDayBlock>
    </>
  );
};

const CalenderOneDate = ({
  isSundayStart = true,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalenderDayBar {...props}>
      {makeOneDayBlockList(isSundayStart)}
    </S.CalenderDayBar>
  );
};

export default CalenderOneDate;
