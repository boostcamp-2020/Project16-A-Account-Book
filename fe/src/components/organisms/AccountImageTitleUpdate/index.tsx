import React from 'react';
import emptyImg from 'assets/svg/account.svg';
import * as S from './style';

export interface Props {
  account: any;
  inputRef?: any;
  errorMessage?: string;
}

const AccountImageTitleUpdate = ({
  account,
  inputRef,
  errorMessage,
  ...props
}: Props) => {
  const text = '가계부 이름';
  return (
    <S.AccountImageTitleUpdate {...props}>
      <div className="imageWrap">
        <S.Icon icon={account.icon || emptyImg} />
      </div>
      <div className="textWrap">
        <div className="title">{text}</div>
        <S.TitleInput
          placeholder="가계부 제목을 입력하세요"
          inputRef={inputRef}
          type="text"
        />
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </div>
    </S.AccountImageTitleUpdate>
  );
};

export default AccountImageTitleUpdate;
