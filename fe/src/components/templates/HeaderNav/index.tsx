import React from 'react';
import NavBar from 'components/organisms/NavBar';
import * as S from './style';

export interface Props {
  HeaderBar: any;
  SubHeaderBar: any;
  Contents: any;
}

const HeaderNav = ({ HeaderBar, SubHeaderBar, Contents, ...props }: Props) => {
  return (
    <S.HeaderNav {...props}>
      {HeaderBar}
      {SubHeaderBar}
      <S.FilterBar />
      <S.ContentArea>{Contents}</S.ContentArea>
      <S.Footer>
        <NavBar />
      </S.Footer>
    </S.HeaderNav>
  );
};

export default HeaderNav;
