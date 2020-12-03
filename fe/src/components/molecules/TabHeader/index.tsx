import React from 'react';
import * as S from './style';

export interface Props {
  onClickHandler: any;
}

const TabHeader = ({ onClickHandler }: Props) => {
  return (
    <S.TabUI>
      <S.TabButton value="EXPENSE" onClick={onClickHandler}>
        지출
      </S.TabButton>
      <S.TabButton value="INCOME" onClick={onClickHandler}>
        수입
      </S.TabButton>
      <S.TabButton value="이체" onClick={onClickHandler}>
        이체
      </S.TabButton>
    </S.TabUI>
  );
};

export default TabHeader;
