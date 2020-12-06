import React from 'react';
import TabHeader from 'components/molecules/TabHeader';
import CategoryDropdown from 'components/molecules/CategoryDropdown';
import PlusIcon from 'assets/svg/plus.svg';
import * as S from './style';

export interface Props {
  dataList: any;
  onClickHandler: any;
  onPlusButtonClick: any;
  dropDownItemClicked: any;
  editButtonHandler: any;
  isClicked: boolean;
}

const CategoryArea = ({
  dataList,
  onClickHandler,
  onPlusButtonClick,
  dropDownItemClicked,
  editButtonHandler,
  isClicked,
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
        <S.CustomDropDownBody>
          <CategoryDropdown
            dataList={dataList}
            dropDownItemClicked={dropDownItemClicked}
            isClicked={isClicked}
          />
        </S.CustomDropDownBody>
      </S.DropDownContainer>
      <S.TabBottomArea>
        <S.StyledButton icon={PlusIcon} onClick={onPlusButtonClick} />
      </S.TabBottomArea>
    </S.CategoryAreaContainer>
  );
};

export default CategoryArea;
