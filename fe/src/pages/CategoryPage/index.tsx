import React, { useEffect, useState } from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/Header';
import backArrow from 'assets/svg/backArrow.svg';
import IconButton from 'components/molecules/IconButton';
import CategoryArea from 'components/organisms/CategoryArea';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { CategoryStore, categoryType } from 'stores/Category';
import { TransactionStore } from 'stores/Transaction';
import Modal from 'components/molecules/Modal';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import LabelWrap from 'components/molecules/LabelWrap';
import axios from 'apis/axios';
import url from 'apis/urls';

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

  const dropDownItemClicked = (objId: string) => {
    setSelected(objId);
    setVisible(true);
  };

  const deleteClicked = async (objId: string) => {
    setSelected(objId);
    setDeleteVisible(true);
  };

  const deleteConfirm = async () => {
    await axios.put(url.defaultCategory, { objId: selected });
    setSelected('');
    CategoryStore.loadCategories();
    setDeleteVisible(false);
  };

  const newCategoryConfirm = async () => {
    if (!selected) {
      await axios.post(url.defaultCategory, {
        type,
        title: newCategory,
        color,
        accountObjId: TransactionStore.accountObjId,
      });
      CategoryStore.loadCategories();
      setVisible(false);
    } else {
      await axios.put(url.defaultCategory, {
        objId: selected,
        type,
        title: newCategory,
        color,
      });
      setSelected('');
      CategoryStore.loadCategories();
      setVisible(false);
    }
  };

  const deleteCancel = () => {
    setDeleteVisible(false);
  };

  const newCategoryCancel = () => {
    setVisible(false);
  };

  const onPlusButtonClick = () => {
    setVisible(true);
  };

  useEffect(() => {
    CategoryStore.loadCategories();
  }, []);

  const headerContent = <Header />;

  const homeButton = <IconButton icon={backArrow} />;

  const deleteModalContent = (
    <S.ContantsWrapper>
      <S.ContentWrapper>
        <span>정말 삭제하시겠습니까?</span>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Input type="button" onClick={deleteConfirm} value="확인" />
        <Button onClick={deleteCancel}>취소</Button>
      </S.ContentWrapper>
    </S.ContantsWrapper>
  );

  const modalContent = (
    <S.ContantsWrapper>
      <S.ContentWrapper>
        <LabelWrap htmlFor="memo" title={type}>
          <Input onChangeHandler={newCategoryNameHandler} />
        </LabelWrap>
        <LabelWrap htmlFor="memo" title="color">
          <Input type="color" onClick={newColorHandler} />
        </LabelWrap>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Input type="button" onClick={newCategoryConfirm} value="확인" />
        <Button onClick={newCategoryCancel}>취소</Button>
      </S.ContentWrapper>
    </S.ContantsWrapper>
  );

  const bodyContent = (
    <S.PageContainer>
      <CategoryArea
        dataList={toJS(CategoryStore.getCategories(type))}
        onClickHandler={TabClickHandler}
        onPlusButtonClick={onPlusButtonClick}
        dropDownItemClicked={dropDownItemClicked}
        editButtonHandler={editButtonHandler}
        isClicked={isClicked}
        deleteClicked={deleteClicked}
      />
      <Modal visible={visible} content={modalContent} />
      <Modal visible={deleteVisible} content={deleteModalContent} />
    </S.PageContainer>
  );

  return (
    <CategoryTemplate
      headerContent={headerContent}
      homeButton={homeButton}
      title="카테고리 설정"
      bodyContent={bodyContent}
    />
  );
}

export default observer(CategoryPage);
