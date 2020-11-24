import React from 'react';
import { Props as InputProps } from 'components/atoms/Input';
import * as S from './style';

export interface Props extends InputProps {
  labelFor: string;
  title: string;
}

const LabelInput = ({
  labelFor,
  title,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.LabelInput>
      <S.LabelWrap>
        <label htmlFor={labelFor}>{title}</label>
      </S.LabelWrap>
      <S.InputWrap id={labelFor} {...props} />
    </S.LabelInput>
  );
};

export default LabelInput;
