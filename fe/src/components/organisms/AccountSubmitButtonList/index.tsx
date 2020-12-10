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
      <S.Button type="button" value={submitText} onClick={onSubmitClick} />
      <S.Button type="button" value="취소" onClick={onCancelClick} />
      {!isNewAccount && (
        <S.Button type="button" value={deleteText} onClick={onDeleteClick} />
      )}
    </S.AccountSubmitButtonList>
  );
};

export default AccountSubmitButtonList;
