/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import FilterListInterface from './FilterListInterface';
import * as S from '../style';
import CheckBox from '../../../molecules/Checkbox';

const TopFilter = ({
  filterTitle,
  disabled,
  children,
  onClick,
}: FilterListInterface) => {
  return (
    <S.FlexBox>
      <div className="head-container" onClick={onClick}>
        <CheckBox checked={!disabled} />
        <p>{filterTitle}</p>
      </div>
      {children}
    </S.FlexBox>
  );
};

export default TopFilter;
