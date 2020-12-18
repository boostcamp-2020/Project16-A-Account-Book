import React from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import * as S from './style';
import MainFilterForm from '../MainFilterForm';
import DropdownHeader from '../../molecules/DropdownHeader';

export interface Props {}

const FilterBar = ({ ...props }: Props): React.ReactElement => {
  const { isFiltered } = TransactionStore;

  const onResetFilter = () => {
    TransactionStore.resetFilter();
  };
  return (
    <S.FilterBar {...props}>
      <S.FilterLabel>
        <DropdownHeader title="필터">
          <MainFilterForm />
        </DropdownHeader>
      </S.FilterLabel>
      {isFiltered && (
        <S.ResetButton
          type="button"
          value="필터 초기화"
          onClick={onResetFilter}
        />
      )}
    </S.FilterBar>
  );
};

export default observer(FilterBar);
