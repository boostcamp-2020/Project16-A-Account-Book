import React from 'react';
import FilterListInterface from './FilterListInterface';
import * as S from './style';
import CheckBox from '../../molecules/Checkbox';

const TopFilter = ({ filterTitle, children }: FilterListInterface) => {
  return (
    <S.FlexBox>
      <div className="head-container">
        <CheckBox />
        <p>{filterTitle}</p>
      </div>
      {children}
    </S.FlexBox>
  );
};

export default TopFilter;
