import React, { useRef, useReducer, useEffect } from 'react';
import useVisible from 'hooks/useVisible';
import { MethodStore } from 'stores/Method';
import { CategoryStore, categoryType } from 'stores/Category';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import dateUtils from 'utils/date';
import * as S from './style';
import DateRange from '../../molecules/DateRange';
import DropdownHeader from '../../molecules/DropdownHeader';
import Dropdown from '../../molecules/Dropdown';
import { reducer, actions } from './filterReducer';
import {
  TopFilter,
  CategoryFilterList,
  Modal,
  DatePickerList,
} from './SubComponents';

const types = {
  INCOME: 'income',
  expense: 'expense',
};

const MainFilterForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    dates: TransactionStore.getOriginDates(),
    ...TransactionStore.getFilter(),
  });

  const { dates, categories, methods } = state;
  const { income, expense } = categories;
  const container = useRef<HTMLDivElement>(null);
  const [visible, toggleVisible] = useVisible(container);

  useEffect(() => {
    CategoryStore.loadCategories();
    MethodStore.loadMethods();
  }, []);

  const onClickDateFix = (type: number) => {
    switch (type) {
      case 0: {
        dispatch(actions.setDates(new Date(), new Date()));
        break;
      }
      case 1: {
        const d = dateUtils.getOneWeekRange(new Date(), false);
        dispatch(actions.setDates(d.startDate, d.endDate));
        break;
      }
      case 2: {
        const d = dateUtils.getMonthRange(new Date());
        dispatch(actions.setDates(d.startDate, d.endDate));
        break;
      }
      case 3: {
        const d = dateUtils.getOneYearRange(new Date());
        dispatch(actions.setDates(d.startDate, d.endDate));
        break;
      }
      default: {
        dispatch(actions.setDates(new Date(), new Date()));
        break;
      }
    }
  };

  const onChangeDate = (dateList: [Date | null, Date | null]) => {
    const [startDate, endDate] = dateList;
    dispatch(actions.setDates(startDate, endDate));
    if (endDate) toggleVisible();
  };

  const onClickCategory = ({ type, _id }: { type: string; _id: string }) => {
    dispatch(actions.setCategory(type, _id));
  };

  const onClickCategoryDisable = (type: string) =>
    dispatch(actions.setCategoryDisable(type));

  const onClickMethod = ({ _id }: { _id: string }) => {
    dispatch(actions.setMethod(_id));
  };
  const onCancle = () => {
    document.body.click();
  };

  const onApplyHandler = () => {
    const increasedEndDate = dateUtils.increaseOneDate(dates.endDate);
    const convertTarget = {
      ...state,
      dates: { startDate: dates.startDate, endDate: increasedEndDate },
    };
    sessionStorage.setItem('filter', JSON.stringify(convertTarget));

    TransactionStore.setFilter(dates.startDate, increasedEndDate);
    TransactionStore.isFiltered = true;
    document.body.click();
  };
  return (
    <S.Container>
      <TopFilter filterTitle="기간">
        <S.DateContainer>
          <DropdownHeader title="기간">
            <DatePickerList
              onClick={toggleVisible}
              onClickFix={onClickDateFix}
            />
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
          dataList={MethodStore.getMethods()}
          onClick={onClickMethod}
          checkList={methods}
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
          filterTitle="수입"
          disabled={expense.disabled}
          onClick={() => onClickCategoryDisable(types.expense)}
        >
          <Dropdown
            disabled={expense.disabled}
            dataList={CategoryStore.getCategories(categoryType.EXPENSE)}
            onClick={onClickCategory}
            checkList={expense.list}
            title="수입 카테고리"
            type={types.expense}
          />
        </CategoryFilterList>
        <CategoryFilterList
          filterTitle="지출"
          disabled={income.disabled}
          onClick={() => onClickCategoryDisable(types.INCOME)}
        >
          <Dropdown
            dataList={CategoryStore.getCategories(categoryType.INCOME)}
            onClick={onClickCategory}
            disabled={income.disabled}
            checkList={income.list}
            title="지출 카테고리"
            type={types.INCOME}
          />
        </CategoryFilterList>
      </S.Box>
      <div className="buttons">
        <S.BottomButton type="button" onClick={onApplyHandler} value="확인" />

        <S.BottomButton type="button" onClick={onCancle} value="취소" />
      </div>
    </S.Container>
  );
};

export default observer(MainFilterForm);
