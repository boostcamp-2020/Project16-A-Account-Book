import React from 'react';
import LoginTemplate from 'components/templates/LoginTemplate';
import LoginButtons from 'components/organisms/LoginButtons';
import * as S from './style';

const logoUrl =
  'https://camo.githubusercontent.com/9acad1537ebb0c3e10abbf4b74ef2d1929c2d504a91e8cd49bfcd1ddbeff4f9d/68747470733a2f2f692e696d6775722e636f6d2f633238335a764a2e706e67';
function LoginPage(): React.ReactElement {
  const Contents = (
    <S.Wrap>
      <div className="mainTitle">N 석 봉</div>
      <img src={logoUrl} alt="logo" />
      <LoginButtons />
    </S.Wrap>
  );
  return <LoginTemplate oauthContent={Contents} />;
}

export default LoginPage;
