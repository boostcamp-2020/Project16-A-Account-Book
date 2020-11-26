import React from 'react';
import * as S from './style';

export interface Props {}

const HeaderBar = ({ ...props }: Props): React.ReactElement => {
  return <S.HeaderBar {...props} />;
};

export default HeaderBar;
