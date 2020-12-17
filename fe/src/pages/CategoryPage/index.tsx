import React, { useEffect, useState, useRef, useCallback } from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/HeaderBar';
import CategoryArea from 'components/organisms/CategoryArea';
import { observer } from 'mobx-react-lite';
import {
  CategoryStore,
  categoryType,
  categoryConverter,
} from 'stores/Category';
import { TransactionStore } from 'stores/Transaction';
import { MethodStore } from 'stores/Method';
import Modal from 'components/molecules/Modal';
import Input from 'components/atoms/Input';
import LabelWrap from 'components/molecules/LabelWrap';
import categoryAPI from 'apis/category';
import methodAPI from 'apis/method';
import NavBarComponent from 'components/organisms/NavBar';
import { getRandomColor } from 'utils/random';
import * as S from './style';

export interface MatchParams {
  title: string;
}

export interface ClickTarget extends EventTarget {
  id: number;
  value: string;
}

export interface ClickProps extends MouseEvent {
  target: ClickTarget;
}
const DeleteModalContent = ({
  deleteConfirm,
  deleteCancel,
}: {
  deleteConfirm: any;
  deleteCancel: any;
}) => {
  return (
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
};

const D = React.memo(DeleteModalContent);

function CategoryPage(): React.ReactElement {
  const [type, setType] = useState<string>(categoryType.EXPENSE);
  const [visible, setVisible] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const colorPicker = useRef<any>();
  const inputRef = useRef<any>();
  const selectedRef = useRef<string>('');

  const editButtonHandler = () => setIsClicked(!isClicked);
  useEffect(() => {
    MethodStore.loadMethods();
    CategoryStore.loadCategories();
  }, []);

  const TabClickHandler = useCallback(
    ({ target: { value, id } }: ClickProps) => {
      setType(categoryConverter(value));
      setSelectedTab(id);
    },
    [],
  );

  const dropDownItemClicked = (data: any) => {
    selectedRef.current = data._id;
    colorPicker.current.value = data.color;
    inputRef.current.value = data.title;
    setVisible(true);
  };

  const deleteClicked = (objId: string) => {
    selectedRef.current = objId;
    setDeleteVisible(true);
  };
  const loadStore = () => {
    const loadFuc =
      type === 'METHOD'
        ? MethodStore.loadMethods.bind(MethodStore)
        : CategoryStore.loadCategories.bind(CategoryStore);
    loadFuc();
  };
  const removeConfirm = async () => {
    const apiFuc =
      type === 'METHOD' ? methodAPI.removeMethod : categoryAPI.deleteCategory;
    await apiFuc(TransactionStore.accountObjId, selectedRef.current);
    loadStore();
    setDeleteVisible(false);
  };
  const isVaildLengthTitle = (title: string) => {
    return title && title.length >= 1 && title.length <= 20;
  };
  const confirm = async () => {
    const trimedTitle = inputRef.current.value.trim();
    if (!isVaildLengthTitle(trimedTitle)) {
      alert('최대 20자까지 입력이 가능합니다.');
      return;
    }
    const apiFuc = type === 'METHOD' ? methodConfirm : categoryConfirm;
    const result: any = await apiFuc();
    if (result.error) {
      alert(result.error);
    } else {
      loadStore();
      selectedRef.current = '';
      onCancle(setVisible)();
    }
  };
  const methodConfirm = async () => {
    const exist = MethodStore.getMethods().find(
      (method) => method.title === inputRef.current.value.trim(),
    );
    if (exist && exist._id === selectedRef.current) {
      return Promise.resolve({ error: '변경사항이 없습니다!' });
    }
    if (exist) {
      return Promise.resolve({ error: '중복되는 입력입니다!' });
    }
    const body = {
      title: inputRef.current.value,
    };
    const func = selectedRef.current
      ? methodAPI.updateMethod
      : methodAPI.createMethod;
    return func(TransactionStore.accountObjId, body, selectedRef.current);
  };
  const categoryConfirm = async () => {
    const exist = CategoryStore.getCategories(type).find(
      (category) => category.title === inputRef.current.value.trim(),
    );
    if (
      exist &&
      exist._id === selectedRef.current &&
      exist.color === colorPicker.current.value
    ) {
      return Promise.resolve({ error: '변경사항이 없습니다!' });
    }
    if (exist && exist._id !== selectedRef.current) {
      return Promise.resolve({ error: '중복된 타이틀이 존재합니다!' });
    }
    const body = {
      type,
      title: inputRef.current.value,
      color: colorPicker.current.value,
      objId: selectedRef.current,
    };
    const fuc = selectedRef.current
      ? categoryAPI.putCategory
      : categoryAPI.postCategory;
    return fuc(TransactionStore.accountObjId, body);
  };

  const onCancle = (fnc: any) => () => {
    inputRef.current.value = '';
    selectedRef.current = '';
    fnc(false);
  };

  const onPlusButtonClick = () => {
    inputRef.current.value = '';
    colorPicker.current.value = getRandomColor();
    setVisible(true);
  };

  const modalContent = (
    <S.ContantsWrapper>
      <div className="input-container">
        <LabelWrap htmlFor="input-category" title={type}>
          <Input id="input-category" type="text" inputRef={inputRef} />
        </LabelWrap>
        <LabelWrap
          htmlFor="color-picker"
          title="color"
          visible={type !== 'METHOD'}
        >
          <Input id="color-picker" type="color" inputRef={colorPicker} />
        </LabelWrap>
      </div>

      <S.ContentWrapper>
        <Input type="button" onClick={confirm} value="확인" />
        <Input type="button" onClick={onCancle(setVisible)} value="취소" />
      </S.ContentWrapper>
    </S.ContantsWrapper>
  );
  const DC = (
    <D
      deleteCancel={onCancle(setDeleteVisible)}
      deleteConfirm={removeConfirm}
    />
  );
  const bodyContent = (
    <>
      <CategoryArea
        dataList={
          type === 'METHOD'
            ? MethodStore.getMethods()
            : CategoryStore.getCategories(type)
        }
        onClickHandler={TabClickHandler}
        onPlusButtonClick={onPlusButtonClick}
        dropDownItemClicked={dropDownItemClicked}
        editButtonHandler={editButtonHandler}
        isClicked={isClicked}
        deleteClicked={deleteClicked}
        selectedTab={selectedTab}
      />
      <Modal visible={visible} content={modalContent} />
      <Modal visible={deleteVisible} content={DC} />
    </>
  );

  return (
    <CategoryTemplate
      headerContent={<Header />}
      bodyContent={bodyContent}
      NavBar={<NavBarComponent />}
    />
  );
}

export default observer(CategoryPage);
