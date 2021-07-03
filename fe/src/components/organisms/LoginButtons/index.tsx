import React from 'react';

import GithubButton from 'components/molecules/GithubButton';
import FacebookButton from 'components/molecules/FacebookButton';
import * as S from './style';

function LoginButtons(): React.ReactElement {
  return (
    <S.Container>
      <S.ButtonItem>
        <GithubButton />
      </S.ButtonItem>
      <S.ButtonItem>
        <FacebookButton />
      </S.ButtonItem>
    </S.Container>
  );
}

export default LoginButtons;
