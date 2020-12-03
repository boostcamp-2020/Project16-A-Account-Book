import React, { ReactElement } from 'react';
import * as S from './style';

export interface Props {
  HeaderBar: ReactElement;
  SubHeaderBar: ReactElement;
  Contents: ReactElement;
  NavBar: ReactElement;
}

const HeaderNav = ({
  HeaderBar,
  SubHeaderBar,
  Contents,
  NavBar,
  ...props
}: Props) => {
  return (
    <S.HeaderNav {...props}>
      <S.Header>{HeaderBar}</S.Header>
      <S.ContentArea>
        {SubHeaderBar}
        <S.Content>{Contents}</S.Content>
      </S.ContentArea>
      <S.Nav>{NavBar}</S.Nav>
    </S.HeaderNav>
  );
};

export default HeaderNav;
