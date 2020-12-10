import React from 'react';
import * as S from './style';

export interface Props {
  account: any;
  onClick?: () => void;
}

const Account = ({ account, onClick = () => {}, ...props }: Props) => {
  const text = `${account.ownerName}/${account.title}`;
  const profileUrls = account.users.map((user: any) => {
    return user.profileUrl;
  });
  return (
    <S.Account onClick={onClick} {...props}>
      <S.Icon icon={account.icon} />
      <div>{text}</div>
      <S.ProfileList profileImgList={profileUrls} />
    </S.Account>
  );
};

export default Account;
