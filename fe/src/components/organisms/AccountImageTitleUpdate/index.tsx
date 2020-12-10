import React from 'react';
import { AccountStore } from 'stores/Account';
import { observer } from 'mobx-react-lite';
import emptyImg from 'assets/svg/account.svg';
import * as S from './style';

export interface Props {
  account: any;
  title?: String;
}

const AccountImageTitleUpdate = ({ account, title, ...props }: Props) => {
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
          value={AccountStore.accountUpdateTitle}
          onChangeHandler={(e: any) => {
            AccountStore.setAccountUpdateTitle(e.target.value);
          }}
        />
      </div>
    </S.AccountImageTitleUpdate>
  );
};

export default observer(AccountImageTitleUpdate);
