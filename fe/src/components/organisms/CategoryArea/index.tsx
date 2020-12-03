import React from 'react';
import TabHeader from 'components/molecules/TabHeader';
import DropdownBody from 'components/molecules/DropdownBody';
import PlusIcon from 'assets/svg/plus.svg';
import * as S from './style';

const editButtonHandler = () => {
  console.log('edit clicked');
};

const dropDownItemClicked = () => {
  console.log('dropdown item clicked');
};

export interface Props {
  dataList: any;
  onClickHandler: any;
  onPlusButtonClick: any;
}

const CategoryArea = ({
  dataList,
  onClickHandler,
  onPlusButtonClick,
}: Props) => {
  return (
    <S.CategoryAreaContainer>
      <S.TabUIContainer>
        <TabHeader onClickHandler={onClickHandler} />
      </S.TabUIContainer>
      <S.EditButtonArea>
        <S.EditButton value="edit" onClick={editButtonHandler}>
          편집
        </S.EditButton>
      </S.EditButtonArea>
      <S.DropDownContainer>
        <DropdownBody dataList={dataList} onClick={dropDownItemClicked} />
      </S.DropDownContainer>
      <S.TabBottomArea>
        <S.StyledButton icon={PlusIcon} onClick={onPlusButtonClick} />
      </S.TabBottomArea>
    </S.CategoryAreaContainer>
  );
};

export default CategoryArea;
