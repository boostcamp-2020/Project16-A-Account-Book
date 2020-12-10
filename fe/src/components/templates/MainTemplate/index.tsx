import React, { ReactElement } from 'react';
import * as S from './style';

export interface Props {
  HeaderBar: ReactElement;
  SubHeaderBar?: ReactElement;
  Contents: ReactElement;
  NavBar?: ReactElement;
}

const MainTemplate = ({
  HeaderBar,
  SubHeaderBar,
  Contents,
  NavBar,
  ...props
}: Props) => {
  return (
    <S.Container {...props}>
      <S.Header>{HeaderBar}</S.Header>
      <S.ContentArea>
        {SubHeaderBar}
        <S.Content>{Contents}</S.Content>
      </S.ContentArea>
      {NavBar && <S.Nav>{NavBar}</S.Nav>}
    </S.Container>
  );
};

export default MainTemplate;
