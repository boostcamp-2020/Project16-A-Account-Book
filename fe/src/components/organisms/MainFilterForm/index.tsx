import React from 'react';
import * as S from './style';
import TopFilter from './TopFilter';
import CategoryFilterList from './CategoryFilterList';

const list = [1, 2, 3, 4, 5];
const MainFilterForm = () => {
  const handler = () => {};
  return (
    <S.Container>
      <S.H2>필터</S.H2>
      <TopFilter filterTitle="기간" title="기간입력" />
      <TopFilter filterTitle="기간" title="기간입력" />

      <S.Box>
        <S.Label>
          <small>카테고리</small>
        </S.Label>

        <CategoryFilterList
          filterTitle="지출"
          title="지출 카테고리"
          dataList={list}
          onClick={handler}
        />
        <CategoryFilterList
          filterTitle="수입"
          title="수입 카테고리"
          dataList={list}
          onClick={handler}
        />
        <CategoryFilterList
          filterTitle="이체"
          title="이체 카테고리"
          dataList={list}
          onClick={handler}
        />
      </S.Box>
    </S.Container>
  );
};

export default MainFilterForm;
