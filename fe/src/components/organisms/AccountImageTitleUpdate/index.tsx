import React from 'react';
import * as S from './style';

export interface Props {
  account: any;
}

const AccountImageTitleUpdate = ({ account, ...props }: Props) => {
  const text = '가계부 이름';
  return (
    <S.AccountImageTitleUpdate {...props}>
      <div className="imageWrap">
        <S.Icon icon={account.icon} />
        <S.UploadBtn>업로드</S.UploadBtn>
      </div>
      <div className="textWrap">
        <div className="title">{text}</div>
        <S.TitleInput
          placeholder="가계부 제목을 입력하세요"
          value={account.title}
        />
      </div>
    </S.AccountImageTitleUpdate>
  );
};

export default AccountImageTitleUpdate;
