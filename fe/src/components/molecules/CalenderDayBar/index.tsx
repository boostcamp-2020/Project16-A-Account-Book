import React from 'react';
import * as S from './style';

export interface Props {
  isSundayStart: boolean;
}

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

const makeOneDayBlockList = (isSundayStart: boolean) => {
  if (isSundayStart) {
    return dayList.map((day) => {
      return (
        <S.OneDayBlock key={day}>
          <S.Text key={day}>{day}</S.Text>
        </S.OneDayBlock>
      );
    });
  }
  return (
    <>
      {dayList.slice(1).map((day) => {
        return (
          <S.OneDayBlock key={day}>
            <S.Text key={day}>{day}</S.Text>
          </S.OneDayBlock>
        );
      })}
      <S.OneDayBlock>
        <S.Text>일</S.Text>
      </S.OneDayBlock>
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
