import React from 'react';
import { Link } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import * as S from './style';

export interface Props {
  title?: string;
}

const onClickHandler = () => {
  TransactionStore.setAccountObjId('');
};

const HeaderBar = ({
  title = 'N석봉',
  ...props
}: Props): React.ReactElement => {
  return (
    <S.HeaderBar {...props}>
      <Link to="/accounts" onClick={onClickHandler}>
        {title}
      </Link>
    </S.HeaderBar>
  );
};

export default HeaderBar;
