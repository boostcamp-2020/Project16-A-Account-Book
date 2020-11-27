import React from 'react';

import * as S from './style';

interface Props {
  headerContent: React.ReactNode;
  oauthContent: React.ReactNode;
}

function LoginTemplate({
  headerContent,
  oauthContent,
}: Props): React.ReactElement {
  return (
    <S.Container>
      <S.HeaderContainer>{headerContent}</S.HeaderContainer>
      <S.BodyContainer>{oauthContent}</S.BodyContainer>
    </S.Container>
  );
}

export default LoginTemplate;
