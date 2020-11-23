import React from 'react';
import Icon, { Props as IconProps } from 'components/atoms/Icons';
import { Props as ButtonProps } from 'components/atoms/Button';
import * as S from './style';

export interface Props extends IconProps, ButtonProps {}

const IconButton = ({
  icon,
  size = 'md',
  onClick,
  children,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.IconButton size={size} onClick={onClick} {...props}>
      <>
        <Icon icon={icon} size={size} {...props} />
        <S.Content size={size}>{children}</S.Content>
      </>
    </S.IconButton>
  );
};

export default IconButton;
