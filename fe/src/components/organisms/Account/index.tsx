/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import settingIcon from 'assets/svg/setting.svg';
import * as S from './style';

export interface Props {
  account: any;
  onClick?: () => void;
  onSettingClick?: any;
}

const Account = ({
  account,
  onClick = () => {},
  onSettingClick = () => {},
  ...props
}: Props) => {
  const text = `${account.ownerName}/${account.title}`;
  const profileUrls = account.users.map((user: any) => {
    return user.profileUrl;
  });
  return (
    <S.Account onClick={onClick} {...props}>
      <S.Icon icon={account.icon} />
      <div className="text">{text}</div>
      <S.ProfileList profileImgList={profileUrls} />
      <img
        alt="settingIcon"
        className="settingIcon"
        src={settingIcon}
        onClick={onSettingClick}
      />
    </S.Account>
  );
};

export default Account;
