import React from 'react';

import * as S from './style';

interface Props {
  oauthContent: React.ReactNode;
}

function LoginTemplate({ oauthContent }: Props): React.ReactElement {
  return (
    <S.Container>
      <S.BodyContainer>{oauthContent}</S.BodyContainer>
    </S.Container>
  );
}

export default LoginTemplate;
