import React from 'react';
import * as S from './style';

const TabClickHandler = () => {
  console.log('color change!');
  console.log('content change!');
};

const TabHeader = () => {
  return (
    <S.TabUI>
      <S.TabButton value="지출" onClick={TabClickHandler}>
        지출
      </S.TabButton>
      <S.TabButton value="수입" onClick={TabClickHandler}>
        수입
      </S.TabButton>
      <S.TabButton value="이체" onClick={TabClickHandler}>
        이체
      </S.TabButton>
    </S.TabUI>
  );
};

export default TabHeader;
