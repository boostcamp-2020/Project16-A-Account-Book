import React from 'react';
import LabelWrap from 'components/molecules/LabelWrap';
import * as S from './style';

const CLASSIFICATION = 'classification';
const CATEGORY = 'category';
const MEMO = 'memo';
const DATE = 'date';
const CLIENT = 'client';
const METHOD = 'method';

export interface Props {
  classification: string;
  categories: string[];
  date: string | Date;
  client: string;
  memo: string;
  classifications: string[];
  formHandler: any;
  methods: string[];
}

const TransactionInputField = ({
  classification,
  categories,
  date,
  classifications,
  client,
  memo,
  formHandler,
  methods,
}: Props): React.ReactElement => {
  return (
    <S.Form>
      <LabelWrap htmlFor={CLASSIFICATION} title="분류">
        <>
          {classifications.map((classItem) => (
            <S.ButtonInput
              name={CLASSIFICATION}
              key={`${CLASSIFICATION}-${classItem}`}
              id={CLASSIFICATION}
              value={classItem}
              active={classification === classItem}
              onClick={formHandler}
              type="button"
            />
          ))}
        </>
      </LabelWrap>
      <LabelWrap htmlFor={CATEGORY} title="카테고리">
        <select name={CATEGORY} id={CATEGORY} onChange={formHandler}>
          {categories.map((category) => (
            <option key={`${CATEGORY}-${category}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </LabelWrap>
      <LabelWrap htmlFor={CLIENT} title="거래처">
        <S.Input
          name={CLIENT}
          value={client}
          placeholder="거래처명을 입력하세요"
          onChangeHandler={formHandler}
        />
      </LabelWrap>
      <LabelWrap htmlFor={METHOD} title="결제수단">
        <select name={METHOD} id={METHOD} onChange={formHandler}>
          {methods.map((method) => (
            <option key={`${METHOD}-${method}`} value={method}>
              {method}
            </option>
          ))}
        </select>
      </LabelWrap>
      <LabelWrap htmlFor={DATE} title="날짜">
        <S.Input
          name={DATE}
          type="date"
          value={date}
          onChangeHandler={formHandler}
        />
      </LabelWrap>
      <LabelWrap htmlFor={MEMO} title="메모">
        <S.Input
          value={memo}
          name={MEMO}
          placeholder="메모를 입력하세요"
          onChangeHandler={formHandler}
        />
      </LabelWrap>
    </S.Form>
  );
};

export default TransactionInputField;
