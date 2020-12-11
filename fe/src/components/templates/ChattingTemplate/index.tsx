import React from 'react';

import * as S from './style';

interface Props {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

function ChattingTemplate({
  headerContent,
  bodyContent,
  bottomContent,
}: Props): React.ReactElement {
  return (
    <S.ChattingContainer>
      <S.ChattingHeader>{headerContent}</S.ChattingHeader>
      <S.ChattingContents>{bodyContent}</S.ChattingContents>
      <S.ChattingBottom>{bottomContent}</S.ChattingBottom>
    </S.ChattingContainer>
  );
}

export default ChattingTemplate;
