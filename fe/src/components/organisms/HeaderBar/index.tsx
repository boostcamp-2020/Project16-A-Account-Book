import React from 'react';
import { Link } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import * as S from './style';

export interface Props {}

const onClickHandler = () => {
  TransactionStore.setAccountTitle('N석봉');
  TransactionStore.setAccountObjId('empty');
};

const HeaderBar = ({ ...props }: Props): React.ReactElement => {
  return (
    <S.HeaderBar {...props}>
      <Link to="/" onClick={onClickHandler}>
        {TransactionStore.accountTitle}
      </Link>
    </S.HeaderBar>
  );
};

export default HeaderBar;
