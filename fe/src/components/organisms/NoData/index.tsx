import React from 'react';
import * as S from './style';

const Nodata = ({ ...props }): React.ReactElement => {
  return <S.NoData {...props}>데이터가 없습니다.</S.NoData>;
};

export default Nodata;
