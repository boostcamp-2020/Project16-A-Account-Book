import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const NotFoundPage = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <S.BackButton onClick={goBack} value="뒤로가기" type="button" />
      <S.NotFound>
        <img
          src="https://camo.githubusercontent.com/9acad1537ebb0c3e10abbf4b74ef2d1929c2d504a91e8cd49bfcd1ddbeff4f9d/68747470733a2f2f692e696d6775722e636f6d2f633238335a764a2e706e67"
          width="300px"
          alt="404"
        />
        <div className="big">404</div>
        <div className="small">페이지를 찾을 수 없습니다.</div>
      </S.NotFound>
    </>
  );
};

export default NotFoundPage;
