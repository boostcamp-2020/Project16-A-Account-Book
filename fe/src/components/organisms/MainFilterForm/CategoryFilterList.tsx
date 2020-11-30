import React, { ReactEventHandler } from 'react';
import FilterListInterface from './FilterListInterface';
import * as S from './style';
import DropdownHeader from '../../molecules/DropdownHeader';
import DropdownBody from '../../molecules/DropdownBody';
import CheckBox from '../../molecules/Checkbox';

export interface ITopFilter extends FilterListInterface {
  dataList: any[];
  onClick: ReactEventHandler;
}
const TopFilter = ({ filterTitle, title, dataList, onClick }: ITopFilter) => {
  return (
    <S.FlexBox>
      <div className="head-container">
        <CheckBox />
        <p>{filterTitle}</p>
      </div>
      <DropdownHeader title={title}>
        <DropdownBody dataList={dataList} onClick={onClick} />
      </DropdownHeader>
    </S.FlexBox>
  );
};

export default TopFilter;
