import React, { useEffect, useState } from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/Header';
import CategoryArea from 'components/organisms/CategoryArea';
import { observer } from 'mobx-react-lite';
import { CategoryStore, categoryType } from 'stores/Category';
import { TransactionStore } from 'stores/Transaction';
import Modal from 'components/molecules/Modal';
import Input from 'components/atoms/Input';
import LabelWrap from 'components/molecules/LabelWrap';
import categoryAPI from 'apis/category';
import { getRandomColor } from 'utils/random';
import NavBarComponent from 'components/organisms/NavBar';
import * as S from './style';

export interface MatchParams {
  title: string;
}

export interface ClickTarget extends EventTarget {
  value: string;
}

export interface ClickProps extends MouseEvent {
  target: ClickTarget;
}

function CategoryPage(): React.ReactElement {
  const [type, setType] = useState<string>(categoryType.EXPENSE);
  const [newCategory, setNewCategory] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);

  const editButtonHandler = async () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  const TabClickHandler = (e: ClickProps) => {
    const { value } = e.target;
    if (value === categoryType.INCOME) {
      setType(categoryType.INCOME);
    } else if (value === categoryType.EXPENSE) {
      setType(categoryType.EXPENSE);
    } else {
      setType('notype');
    }
  };

  const newCategoryNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewCategory(value);
  };

  const newColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColor(value);
  };

  const dropDownItemClicked = (data: any) => {
    setSelected(data._id);
    setColor(data.color);
    setVisible(true);
  };

  const deleteClicked = async (objId: string) => {
    setSelected(objId);
    setDeleteVisible(true);
  };

  const deleteConfirm = async () => {
    await categoryAPI.deleteCategory(TransactionStore.accountObjId, selected);
    setSelected('');
    CategoryStore.loadCategories();
    setDeleteVisible(false);
  };

  const newCategoryConfirm = async () => {
    const body = {
      type,
      title: newCategory,
      color,
      objId: selected,
    };
    let result: any;
    if (!selected) {
      result = await categoryAPI.postCategory(
        TransactionStore.accountObjId,
        body,
      );
    } else {
      result = await categoryAPI.putCategory(
        TransactionStore.accountObjId,
        body,
      );
      setSelected('');
    }

    if (result.success) CategoryStore.loadCategories();
    else {
      alert(result.error);
    }
    newCategoryCancel();
  };

  const deleteCancel = () => {
    setDeleteVisible(false);
  };

  const newCategoryCancel = () => {
    setVisible(false);
  };

  const onPlusButtonClick = () => {
    setColor(getRandomColor());

    setVisible(true);
  };

  useEffect(() => {
    CategoryStore.loadCategories();
  }, []);

  const headerContent = <Header />;

  const deleteModalContent = (
    <S.ContantsWrapper>
      <S.ContentWrapper>
        <span>정말 삭제하시겠습니까?</span>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Input type="button" onClick={deleteConfirm} value="확인" />
        <Input type="button" onClick={deleteCancel} value="취소" />
      </S.ContentWrapper>
    </S.ContantsWrapper>
  );

  const modalContent = (
    <S.ContantsWrapper>
      <div className="input-container">
        <LabelWrap htmlFor="input-category" title={type}>
          <Input
            onChangeHandler={newCategoryNameHandler}
            id="input-category"
            type="text"
          />
        </LabelWrap>
        <LabelWrap htmlFor="color-picker" title="color">
          <Input
            type="color"
            onClick={newColorHandler}
            value={color}
            id="color-picker"
          />
        </LabelWrap>
      </div>

      <S.ContentWrapper>
        <Input type="button" onClick={newCategoryConfirm} value="확인" />
        <Input type="button" onClick={newCategoryCancel} value="취소" />
      </S.ContentWrapper>
    </S.ContantsWrapper>
  );

  const bodyContent = (
    <>
      <CategoryArea
        dataList={CategoryStore.getCategories(type)}
        onClickHandler={TabClickHandler}
        onPlusButtonClick={onPlusButtonClick}
        dropDownItemClicked={dropDownItemClicked}
        editButtonHandler={editButtonHandler}
        isClicked={isClicked}
        deleteClicked={deleteClicked}
      />
      <Modal visible={visible} content={modalContent} />
      <Modal visible={deleteVisible} content={deleteModalContent} />
    </>
  );

  return (
    <CategoryTemplate
      headerContent={headerContent}
      title="카테고리 설정"
      bodyContent={bodyContent}
      NavBar={<NavBarComponent />}
    />
  );
}

export default observer(CategoryPage);
