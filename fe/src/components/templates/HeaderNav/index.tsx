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
      {HeaderBar}
      {SubHeaderBar}
      <S.ContentArea>{Contents}</S.ContentArea>
      <S.Nav>{NavBar}</S.Nav>
    </S.HeaderNav>
  );
};

export default HeaderNav;
