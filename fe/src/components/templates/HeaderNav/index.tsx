import React from 'react';
import * as S from './style';

export interface Props {
  HeaderBar: any;
  SubHeaderBar: any;
  Contents: any;
  NavBar: any;
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
      <S.Footer>{NavBar}</S.Footer>
    </S.HeaderNav>
  );
};

export default HeaderNav;
