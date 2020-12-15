import React from 'react';
import * as S from './style';

const Nodata = ({ ...props }): React.ReactElement => {
  return (
    <S.NoData {...props}>
      <div className="image" />
      <div>해당기간 거래내역이 없습니다.</div>
    </S.NoData>
  );
};

export default Nodata;
