/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import LabelWrap from 'components/molecules/LabelWrap';
import 'react-datepicker/dist/react-datepicker.css';
import { MethodStore } from 'stores/Method';
import { CategoryStore } from 'stores/Category';
import { observer } from 'mobx-react-lite';
import DatePicker from 'components/atoms/DatePicker';
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
  price: number;
  category: string;
  method: string;
  formHandler: any;
}

const TransactionInputField = ({
  classification,
  date,
  classifications,
  client,
  memo,
  formHandler,
  price,
  category,
  method,
}: Props): React.ReactElement => {
  const methods = MethodStore.getMethods();
  const categories = CategoryStore.getCategories(classification);
  const newPrice = price === 0 ? undefined : price;
  return (
    <S.Container>
      <LabelWrap htmlFor={PRICE} title="금액">
        <S.Input
          value={newPrice}
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
          {categories.map((categoryItem) => (
            <option
              key={categoryItem._id}
              value={categoryItem._id}
              selected={category === categoryItem._id}
            >
              {categoryItem.title}
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
          {methods.map((methodItem) => {
            if (methodItem.title === '미분류') return <></>;
            return (
              <option
                key={methodItem._id}
                value={methodItem._id}
                selected={method === methodItem._id}
              >
                {methodItem.title}
              </option>
            );
          })}
        </select>
      </LabelWrap>
      <LabelWrap htmlFor={DATE} title="날짜">
        <DatePicker
          date={new Date(date)}
          name={DATE}
          disabled={false}
          onChange={(d: Date) =>
            formHandler({ target: { name: DATE, value: d } })
          }
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
    </S.Container>
  );
};

export default observer(TransactionInputField);
