import React, { useRef, useReducer, useEffect } from 'react';
import useVisible from 'hooks/useVisible';
import * as S from './style';
import TopFilter from './TopFilter';
import CategoryFilterList from './CategoryFilterList';
import DateRange from '../../molecules/DateRange';
import DropdownHeader from '../../molecules/DropdownHeader';
import Dropdown from '../../molecules/Dropdown';
import DataPicker, { IDatePicker } from '../../molecules/DatePicker';
import { initialState, reducer, actions } from './filterReducer';

const Buttons = ({ onClick }: { onClick: any }) => {
  return (
    <S.DateFilterContainer>
      <S.DateFilterButton onClick={() => {}}>오늘</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>이번주</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>이번달</S.DateFilterButton>
      <S.DateFilterButton onClick={() => {}}>올 해</S.DateFilterButton>
      <S.DateFilterButton onClick={onClick}>기간 설정</S.DateFilterButton>
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dates, categories, methods } = state;
  const { income, expense } = categories;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(state));
  }, [state]);

  const [visible, toggleVisible] = useVisible(container);

  const onChangeDate = (dateList: [Date | null, Date | null]) => {
    const [startDate, endDate] = dateList;
    dispatch(actions.setDates(startDate, endDate));
    if (endDate) toggleVisible();
  };

  const onClickCategory = ({
    type,
    objectId,
  }: {
    type: string;
    objectId: string;
  }) => {
    dispatch(actions.setCategory(type, objectId));
  };

  const onClickCategoryDisable = (type: string) =>
    dispatch(actions.setCategoryDisable(type));

  const onClickMethod = ({ objectId }: { objectId: string }) => {
    dispatch(actions.setMethod(objectId));
  };
  return (
    <S.Container>
      <TopFilter filterTitle="기간">
        <S.DateContainer>
          <DropdownHeader title="기간">
            <Buttons onClick={toggleVisible} />
          </DropdownHeader>
          <button
            type="button"
            onClick={() => toggleVisible}
            className="range-container"
          >
            <DateRange dates={dates} />
          </button>
        </S.DateContainer>
      </TopFilter>

      <TopFilter filterTitle="결제수단">
        <Dropdown
          dataList={methods}
          onClick={onClickMethod}
          title="수입 카테고리"
        />
      </TopFilter>
      {visible && (
        <Modal dates={dates} onChange={onChangeDate} ref={container} />
      )}
      <S.Box>
        <S.Label>
          <small>카테고리</small>
        </S.Label>

        <CategoryFilterList
          filterTitle="지출"
          disabled={income.disabled}
          onClick={() => onClickCategoryDisable('income')}
        >
          <Dropdown
            dataList={income.list}
            onClick={onClickCategory}
            disabled={income.disabled}
            title="지출 카테고리"
            type="income"
          />
        </CategoryFilterList>

        <CategoryFilterList
          filterTitle="수입"
          disabled={expense.disabled}
          onClick={() => onClickCategoryDisable('expense')}
        >
          <Dropdown
            disabled={expense.disabled}
            dataList={expense.list}
            onClick={onClickCategory}
            title="수입 카테고리"
            type="expense"
          />
        </CategoryFilterList>
      </S.Box>
    </S.Container>
  );
};

export default React.memo(MainFilterForm);
