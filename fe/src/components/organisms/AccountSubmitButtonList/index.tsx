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
  const submitText = isNewAccount ? '생성' : '수정';
  const deleteText = isOwner ? '삭제' : '나가기';
  return (
    <S.AccountSubmitButtonList {...props}>
      <S.Button onClick={onSubmitClick}>{submitText}</S.Button>
      <S.Button onClick={onCancelClick}>취소</S.Button>
      {!isNewAccount && (
        <S.Button onClick={onDeleteClick}>{deleteText}</S.Button>
      )}
    </S.AccountSubmitButtonList>
  );
};

export default AccountSubmitButtonList;
