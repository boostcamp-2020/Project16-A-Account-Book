import React from 'react';
import * as S from '../style';

const DatePickerList = ({
  onClick,
  onClickFix,
}: {
  onClick: any;
  onClickFix: any;
}) => {
  const innerTexts = ['오늘', '이번주', '이번달', '올 해'];
  return (
    <S.DateFilterContainer>
      {innerTexts.map((innerText, index) => {
        return (
          <S.DateFilterButton onClick={() => onClickFix(index)} key={innerText}>
            {innerText}
          </S.DateFilterButton>
        );
      })}
      <S.DateFilterButton onClick={onClick}>기간 설정</S.DateFilterButton>
    </S.DateFilterContainer>
  );
};

export default DatePickerList;
