import React from 'react';
import emptyImg from 'assets/svg/account.svg';
import * as S from './style';

export interface Props {
  account: any;
  inputRef?: any;
}

const AccountImageTitleUpdate = ({ account, inputRef, ...props }: Props) => {
  const text = '가계부 이름';
  return (
    <S.AccountImageTitleUpdate {...props}>
      <div className="imageWrap">
        <S.Icon icon={account.icon || emptyImg} />
        <S.UploadBtn>업로드</S.UploadBtn>
      </div>
      <div className="textWrap">
        <div className="title">{text}</div>
        <S.TitleInput
          placeholder="가계부 제목을 입력하세요"
          inputRef={inputRef}
        />
      </div>
    </S.AccountImageTitleUpdate>
  );
};

export default AccountImageTitleUpdate;
