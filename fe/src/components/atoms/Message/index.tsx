import React from 'react';
import * as S from './style';

export interface Props {
  children: React.ReactElement | React.ReactElement[] | string;
  tag?: 'error' | 'warning' | 'info' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
const Message = ({ children, tag = 'error', size = 'md' }: Props) => {
  return (
    <S.Message tag={tag} size={size}>
      {children}
    </S.Message>
  );
};

export default Message;
