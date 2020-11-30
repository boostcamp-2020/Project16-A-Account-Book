import React from 'react';
import TabHeader from 'components/molecules/TabHeader';
import DropdownBody from 'components/molecules/DropdownBody';
import PlusIcon from 'assets/svg/plus.svg';
import * as S from './style';

export interface TabClickTarget extends EventTarget {
  value?: string;
}

export interface TabClickProps extends MouseEvent {
  target: TabClickTarget;
}

const TabClickHandler = (e: TabClickProps) => {
  const { value } = e.target;
  if (value === '수입') {
    console.log('수입');
  } else if (value === '지출') {
    console.log('지출');
  } else if (value === '이체') {
    console.log('이체');
  }
};

const editButtonHandler = () => {
  console.log('edit clicked');
};

const tempDataList: string[] = ['하나', '둘', '셋'];

const dropDownItemClicked = () => {
  console.log('dropdown item clicked');
};

const onPlusButtonClick = () => {
  console.log('plus button clicked');
};

const CategoryArea = () => {
  return (
    <S.CategoryAreaContainer>
      <S.TabUIContainer>
        <TabHeader onClickHandler={TabClickHandler} />
      </S.TabUIContainer>
      <S.EditButtonArea>
        <S.EditButton value="edit" onClick={editButtonHandler}>
          편집
        </S.EditButton>
      </S.EditButtonArea>
      <S.DropDownContainer>
        <DropdownBody dataList={tempDataList} onClick={dropDownItemClicked} />
      </S.DropDownContainer>
      <S.TabBottomArea>
        <S.StyledButton icon={PlusIcon} onClick={onPlusButtonClick} />
      </S.TabBottomArea>
    </S.CategoryAreaContainer>
  );
};

export default CategoryArea;
