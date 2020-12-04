import React from 'react';
import LabelWrap from 'components/molecules/LabelWrap';
import { MethodStore } from 'stores/Method';
import { CategoryStore } from 'stores/Category';
import { observer } from 'mobx-react-lite';
import * as S from './style';

const CLASSIFICATION = 'classification';
const CATEGORY = 'category';
const MEMO = 'memo';
const DATE = 'date';
const CLIENT = 'client';
const METHOD = 'method';
const PRICE = 'price';

export interface Props {
  classification: string;
  date: string | Date;
  client: string;
  memo: string;
  classifications: string[];
  formHandler: any;
  price: number;
}

const TransactionInputField = ({
  classification,
  date,
  classifications,
  client,
  memo,
  formHandler,
  price,
}: Props): React.ReactElement => {
  const methods = MethodStore.getMethods();
  const categories = CategoryStore.getCategories(classification);

  return (
    <>
      <LabelWrap htmlFor={PRICE} title="금액">
        <S.Input
          value={price}
          name={PRICE}
          placeholder="금액을 입력하세요"
          onChangeHandler={formHandler}
          type="number"
        />
      </LabelWrap>
      <LabelWrap htmlFor={CLASSIFICATION} title="분류">
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
      </LabelWrap>
      <LabelWrap htmlFor={CATEGORY} title="카테고리">
        <select name={CATEGORY} id={CATEGORY} onChange={formHandler}>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
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
            <option key={method._id} value={method._id}>
              {method.title}
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
    </>
  );
};

export default observer(TransactionInputField);
