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
        <div className="content-wapper">
          {SubHeaderBar}
          <S.Content>{Contents}</S.Content>
        </div>
      </S.ContentArea>
      {NavBar && <S.Nav>{NavBar}</S.Nav>}
    </S.Container>
  );
};

export default MainTemplate;
