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
  deleteClicked: any;
  isClicked: boolean;
  selectedTab: number;
}

const CategoryArea = ({
  dataList,
  onClickHandler,
  onPlusButtonClick,
  dropDownItemClicked,
  editButtonHandler,
  deleteClicked,
  isClicked,
  selectedTab,
}: Props) => {
  return (
    <S.CategoryAreaContainer>
      <S.TabUIContainer>
        <TabHeader onClickHandler={onClickHandler} selectedTab={selectedTab} />
      </S.TabUIContainer>
      <S.EditButtonArea>
        <S.CustomEditButton
          value="편집"
          onClick={editButtonHandler}
          type="button"
        />
      </S.EditButtonArea>
      <S.DropDownContainer>
        <div>
          <CategoryDropdown
            dataList={dataList}
            dropDownItemClicked={dropDownItemClicked}
            isClicked={isClicked}
            deleteClicked={deleteClicked}
          />
        </div>
      </S.DropDownContainer>
      <S.TabBottomArea>
        <S.StyledButton icon={PlusIcon} onClick={onPlusButtonClick} />
      </S.TabBottomArea>
    </S.CategoryAreaContainer>
  );
};

export default CategoryArea;
