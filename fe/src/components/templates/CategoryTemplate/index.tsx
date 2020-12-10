import React from 'react';

import * as S from './style';

interface Props {
  headerContent: React.ReactNode;
  title: React.ReactNode;
  bodyContent: React.ReactNode;
  NavBar: React.ReactNode;
}

function CategoryTemplate({
  headerContent,
  title,
  bodyContent,
  NavBar,
}: Props): React.ReactElement {
  return (
    <S.CategoryContainer>
      <S.CategoryHeader>{headerContent}</S.CategoryHeader>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.CategoryBody>{bodyContent}</S.CategoryBody>
      <S.Nav>{NavBar}</S.Nav>
    </S.CategoryContainer>
  );
}

export default CategoryTemplate;
