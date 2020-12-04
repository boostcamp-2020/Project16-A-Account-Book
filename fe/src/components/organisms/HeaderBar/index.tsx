import React from 'react';
import { Link } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import * as S from './style';

export interface Props {}

const onClickHandler = () => {
  TransactionStore.setAccountObjId('');
};

const HeaderBar = ({ ...props }: Props): React.ReactElement => {
  return (
    <S.HeaderBar {...props}>
      <Link to="/accounts" onClick={onClickHandler}>
        N석봉
      </Link>
    </S.HeaderBar>
  );
};

export default HeaderBar;
