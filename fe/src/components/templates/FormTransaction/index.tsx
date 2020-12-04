import React from 'react';
import * as S from './style';

export interface Props {
  header: React.ReactElement;
  main: React.ReactElement;
}

const Template = ({ header, main }: Props): React.ReactElement => {
  return (
    <div>
      <S.Header>{header}</S.Header>
      <S.Main>{main}</S.Main>
    </div>
  );
};

export default Template;
