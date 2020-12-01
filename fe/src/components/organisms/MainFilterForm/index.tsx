import React, { useState } from 'react';
import * as S from './style';
import TopFilter from './TopFilter';
import CategoryFilterList from './CategoryFilterList';
import DateRange from '../../molecules/DateRange';
import DropdownHeader from '../../molecules/DropdownHeader';
import Dropdown from '../../molecules/Dropdown';

const list = [1, 2, 3, 4, 5];

const Buttons = () => {
  return (
    <S.DateFilterContainer>
      <S.DateFilterButton onClick={() => {}}>1</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>1</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>1</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>1</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>1</S.DateFilterButton>
    </S.DateFilterContainer>
  );
};
const MainFilterForm = () => {
  const [dates] = useState({
    startDate: null,
    endDate: null,
  });
  const handler = () => {};

  return (
    <S.Container>
      <TopFilter filterTitle="기간">
        <S.DateContainer>
          <DropdownHeader title="기간">
            <Buttons />
          </DropdownHeader>
          <DateRange dates={dates} />
        </S.DateContainer>
      </TopFilter>
      <TopFilter filterTitle="결제수단">
        <Dropdown dataList={list} onClick={handler} title="수입 카테고리" />
      </TopFilter>

      <S.Box>
        <S.Label>
          <small>카테고리</small>
        </S.Label>

        <CategoryFilterList filterTitle="지출">
          <Dropdown dataList={list} onClick={handler} title="지출 카테고리" />
        </CategoryFilterList>
        <CategoryFilterList filterTitle="수입">
          <Dropdown dataList={list} onClick={handler} title="수입 카테고리" />
        </CategoryFilterList>
      </S.Box>
    </S.Container>
  );
};

export default React.memo(MainFilterForm);
