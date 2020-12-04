import React from 'react';
import * as S from './style';

export interface Props {
  account: any;
  onClick?: () => void;
}

const Account = ({ account, onClick = () => {}, ...props }: Props) => {
  return (
    <S.Account onClick={onClick} {...props}>
      <S.Icon icon={account.icon} />
      <div>{account.title}</div>
    </S.Account>
  );
};

export default Account;
