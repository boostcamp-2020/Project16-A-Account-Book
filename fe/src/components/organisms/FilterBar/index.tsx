import React from 'react';
import searchIcon from 'assets/svg/search.svg';
import Icon from 'components/atoms/Icons';
import * as S from './style';
import MainFilterForm from '../MainFilterForm';

export interface Props {}

const FilterBar = ({ ...props }: Props): React.ReactElement => {
  return (
    <S.FilterBar {...props}>
      <div>필터</div>
      <MainFilterForm />
      <Icon icon={searchIcon} size="sm" />
    </S.FilterBar>
  );
};

export default FilterBar;
