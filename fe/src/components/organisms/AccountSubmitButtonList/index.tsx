import React from 'react';
import * as S from './style';

export interface Props {
  isOwner: boolean;
  isNewAccount: boolean;
  onSubmitClick?: any;
  onCancelClick?: any;
  onDeleteClick?: any;
  setTitle?: React.Dispatch<React.SetStateAction<String>>;
}

const AccountSubmitButtonList = ({
  isOwner,
  isNewAccount,
  onSubmitClick = () => {},
  onCancelClick = () => {},
  onDeleteClick = () => {},
  ...props
}: Props) => {
  return (
    <S.AccountSubmitButtonList {...props}>
      <S.Button onClick={onSubmitClick}>
        {isNewAccount ? '생성' : '수정'}
      </S.Button>
      <S.Button onClick={onCancelClick}>취소</S.Button>
      <S.Button onClick={onDeleteClick}>{isOwner ? '삭제' : '나가기'}</S.Button>
    </S.AccountSubmitButtonList>
  );
};

export default AccountSubmitButtonList;
