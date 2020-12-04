import React from 'react';

import * as S from './style';

interface Props {
  headerContent: React.ReactNode;
  homeButton: React.ReactNode;
  title: React.ReactNode;
  bodyContent: React.ReactNode;
}

function CategoryTemplate({
  headerContent,
  homeButton,
  title,
  bodyContent,
}: Props): React.ReactElement {
  return (
    <S.CategoryContainer>
      <S.CategoryHeader>{headerContent}</S.CategoryHeader>
      <S.CategoryTitle>
        {homeButton}
        {title}
      </S.CategoryTitle>
      <S.CategoryBody>{bodyContent}</S.CategoryBody>
    </S.CategoryContainer>
  );
}

export default CategoryTemplate;
