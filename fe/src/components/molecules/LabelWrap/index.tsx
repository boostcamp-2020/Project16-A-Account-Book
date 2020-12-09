import React from 'react';
import { Props as InputProps } from 'components/atoms/Input';
import * as S from './style';

export interface Props extends InputProps {
  htmlFor: string;
  title: string | React.ReactElement;
  children: React.ReactElement | React.ReactElement[] | string;
}

const LabelWrap = ({ htmlFor, title, children }: Props): React.ReactElement => {
  return (
    <S.LabelWrap>
      <S.Label htmlFor={htmlFor}>{title}</S.Label>
      <S.Contents>{children}</S.Contents>
    </S.LabelWrap>
  );
};

export default React.memo(LabelWrap);
