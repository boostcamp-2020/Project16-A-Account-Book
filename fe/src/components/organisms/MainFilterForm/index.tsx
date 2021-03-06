/* eslint-disable react/jsx-curly-newline */
import React, { useReducer, useEffect } from 'react';
import { MethodStore } from 'stores/Method';
import {
  CategoryStore,
  categoryType,
  categoryConvertBig2Small as convert,
} from 'stores/Category';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import dateUtils from 'utils/date';
import * as S from './style';
import DateRange from '../../molecules/DateRange';
import DropdownHeader from '../../molecules/DropdownHeader';
import Dropdown from '../../molecules/Dropdown';
import { reducer, actions } from './filterReducer';
import { TopFilter, CategoryFilterList, DatePickerList } from './SubComponents';

const SELECT_ALL_TYPE = 'ALL';

const MainFilterForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    dates: {
      startDate: TransactionStore.getOriginDates().startDate,
      endDate: new Date(
        dateUtils.subTractDate(TransactionStore.getDates().endDate),
      ),
    },
    ...TransactionStore.getFilter(),
  });

  const { dates, categories, methods } = state;
  const { income, expense, unclassified } = categories;
  const selectAll = (type: string) => {
    const fetchedCategories = CategoryStore.getCategories(type);
    const selectedCategoryIdList =
      categories[type].list.length === fetchedCategories.length
        ? []
        : fetchedCategories.map((cat) => cat.id);

    dispatch(actions.setAllCategories(type, selectedCategoryIdList));
  };
  const getDataList = async () => {
    await Promise.all([
      CategoryStore.loadCategories(),
      MethodStore.loadMethods(),
    ]);
    if (!TransactionStore.isFiltered) {
      Object.values(categoryType).forEach((cat) => selectAll(convert(cat)));
      const selectedMethodList = MethodStore.getMethods().map(
        (method) => method.id,
      );
      dispatch(actions.setAllMethod(selectedMethodList));
    }
  };
  useEffect(() => {
    getDataList();
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
  const onChangeDate = (date: Date, name: string) => {
    const targetDates = {
      ...dates,
      [name]: date,
    };
    dispatch(actions.setDates(targetDates.startDate, targetDates.endDate));
  };

  const onClickCategory = ({ type, _id }: { type: string; _id: string }) => {
    if (_id === SELECT_ALL_TYPE) {
      selectAll(type);
      return;
    }
    dispatch(actions.setCategory(type, _id));
  };

  const onClickCategoryDisable = (type: string) =>
    dispatch(actions.setCategoryDisable(type));

  const onClickMethod = ({ _id }: { _id: string }) => {
    if (_id === SELECT_ALL_TYPE) {
      const m =
        methods.length === MethodStore.getMethods().length
          ? []
          : MethodStore.getMethods().map((method) => method.id);
      dispatch(actions.setAllMethod(m));
      return;
    }

    dispatch(actions.setMethod(_id));
  };
  const onCancel = () => {
    document.body.click();
  };
  const onApplyHandler = () => {
    const increasedEndDate = dateUtils.increaseOneDate(dates.endDate);
    const convertTarget = {
      ...state,
      dates: { startDate: dates.startDate, endDate: increasedEndDate },
    };
    sessionStorage.setItem('filter', JSON.stringify(convertTarget));
    TransactionStore.setFilter(dates.startDate, increasedEndDate, state);
    TransactionStore.isFiltered = true;
    document.body.click();
  };
  return (
    <S.Container id="filter">
      <TopFilter filterTitle="기간">
        <S.DateContainer>
          <DropdownHeader title="기간">
            <DatePickerList onClickFix={onClickDateFix} />
          </DropdownHeader>
          <button type="button" className="range-container">
            <DateRange dates={dates} onChange={onChangeDate} />
          </button>
        </S.DateContainer>
      </TopFilter>

      <TopFilter filterTitle="결제수단">
        <Dropdown
          dataList={MethodStore.getMethods()}
          onClick={onClickMethod}
          checkList={methods}
          title="결제수단"
        />
      </TopFilter>
      <S.Box>
        <S.Label>
          <small>카테고리</small>
        </S.Label>

        <CategoryFilterList
          filterTitle="지출"
          disabled={expense.disabled}
          onClick={() => onClickCategoryDisable(convert(categoryType.EXPENSE))}
        >
          <Dropdown
            disabled={expense.disabled}
            dataList={CategoryStore.getCategories(categoryType.EXPENSE)}
            onClick={onClickCategory}
            checkList={expense.list}
            title="지출 카테고리"
            type={convert(categoryType.EXPENSE)}
          />
        </CategoryFilterList>

        <CategoryFilterList
          filterTitle="수입"
          disabled={income.disabled}
          onClick={() => onClickCategoryDisable(convert(categoryType.INCOME))}
        >
          <Dropdown
            dataList={CategoryStore.getCategories(categoryType.INCOME)}
            onClick={onClickCategory}
            disabled={income.disabled}
            checkList={income.list}
            title="수입 카테고리"
            type={convert(categoryType.INCOME)}
          />
        </CategoryFilterList>
        <CategoryFilterList
          filterTitle="미분류"
          disabled={unclassified.disabled}
          onClick={() =>
            onClickCategoryDisable(convert(categoryType.UNCLASSIFIED))
          }
        />
      </S.Box>
      <div className="buttons">
        <S.BottomButton type="button" onClick={onApplyHandler} value="확인" />

        <S.BottomButton type="button" onClick={onCancel} value="취소" />
      </div>
    </S.Container>
  );
};

export default observer(MainFilterForm);
