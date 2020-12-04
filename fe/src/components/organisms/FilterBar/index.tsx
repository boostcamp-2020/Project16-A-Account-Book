import React from 'react';
import searchIcon from 'assets/svg/search.svg';
import Icon from 'components/atoms/Icons';
import * as S from './style';
import MainFilterForm from '../MainFilterForm';
import DropdownHeader from '../../molecules/DropdownHeader';

export interface Props {}

const FilterBar = ({ ...props }: Props): React.ReactElement => {
  return (
    <S.FilterBar {...props}>
      <S.FilterLabel>
        <DropdownHeader title="필터">
          <MainFilterForm />
        </DropdownHeader>
      </S.FilterLabel>

      <Icon icon={searchIcon} size="sm" />
    </S.FilterBar>
  );
};

export default FilterBar;
