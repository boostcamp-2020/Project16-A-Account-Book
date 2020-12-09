import React from 'react';
import FilterListInterface from './FilterListInterface';
import * as S from '../style';

const TopFilter = ({ filterTitle, children }: FilterListInterface) => {
  return (
    <S.Box>
      <S.Label>
        <small>{filterTitle}</small>
      </S.Label>
      {children}
    </S.Box>
  );
};

export default TopFilter;
