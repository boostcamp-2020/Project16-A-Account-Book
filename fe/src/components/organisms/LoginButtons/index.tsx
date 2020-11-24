import React from 'react';

import * as S from './style';

import GithubButton from '../../molcules/GithubButton';

function LoginButtons(): React.ReactElement {
  return (
    <S.Container>
      <S.ButtonItem>
        <GithubButton />
      </S.ButtonItem>
    </S.Container>
  );
}

export default LoginButtons;
