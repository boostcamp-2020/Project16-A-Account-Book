import React, { useState, useRef } from 'react';
// import useVisible from 'hooks/useVisible';
import * as S from './style';
import TopFilter from './TopFilter';
import CategoryFilterList from './CategoryFilterList';
import DateRange from '../../molecules/DateRange';
import DropdownHeader from '../../molecules/DropdownHeader';
import Dropdown from '../../molecules/Dropdown';
import DataPicker, { IDatePicker } from '../../molecules/DatePicker';

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
interface IModal extends IDatePicker {
  ref: any;
}
const Modal = ({ dates, onChange, ref }: IModal) => {
  return (
    <S.Model>
      <div ref={ref}>
        <DataPicker dates={dates} onChange={onChange} />
      </div>
    </S.Model>
  );
};
const MainFilterForm = () => {
  const [dates] = useState({
    startDate: null,
    endDate: null,
  });
  const handler = () => {};
  const container = useRef<HTMLDivElement>(null);

  // const [visible] = useVisible(container);
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
      <Modal dates={dates} onChange={() => {}} ref={container} />
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
