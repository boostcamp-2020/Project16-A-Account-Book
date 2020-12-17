import React from 'react';

import * as S from './style';

interface Props {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
  NavBar: React.ReactNode;
}

function CategoryTemplate({
  headerContent,
  bodyContent,
  NavBar,
}: Props): React.ReactElement {
  return (
    <S.CategoryContainer>
      <S.CategoryHeader>{headerContent}</S.CategoryHeader>
      <div className="content-warpper">
        <S.CategoryBody>{bodyContent}</S.CategoryBody>
      </div>
      <S.Nav>{NavBar}</S.Nav>
    </S.CategoryContainer>
  );
}

export default CategoryTemplate;
