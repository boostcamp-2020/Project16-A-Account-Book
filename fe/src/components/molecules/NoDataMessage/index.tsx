import React from 'react';
import * as S from './style';

const NoDataMessage = (): React.ReactElement => {
  return <S.NoDataMessage>내역이 부족하여 분석할 수 없습니다.</S.NoDataMessage>;
};

export default NoDataMessage;
