import React from 'react';
import { Link } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import bell from 'assets/svg/bell.svg';
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
      <div className="content">
        <Link to="/accounts" onClick={onClickHandler}>
          {title}
        </Link>
        <S.Icon icon={bell} />
      </div>
    </S.HeaderBar>
  );
};

export default HeaderBar;
