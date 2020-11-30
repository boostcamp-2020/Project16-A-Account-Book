import React from 'react';
import FilterListInterface from './FilterListInterface';
import * as S from './style';
import DropdownHeader from '../../molecules/DropdownHeader';

const TopFilter = ({ filterTitle, title }: FilterListInterface) => {
  return (
    <S.Box>
      <S.Label>
        <small>{filterTitle}</small>
      </S.Label>
      <DropdownHeader title={title}>
        <div />
      </DropdownHeader>
    </S.Box>
  );
};

export default TopFilter;
