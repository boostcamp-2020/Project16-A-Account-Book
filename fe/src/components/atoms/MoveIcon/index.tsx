import React from 'react';
import Icon from 'components/atoms/Icons';

interface Props {
  rightMargin: number;
  icon: any;
  size: string;
}
const MoveIcon = ({
  icon,
  size = 'md',
  rightMargin,
  ...props
}: Props): React.ReactElement => {
  return <Icon icon={icon} size={size} {...props} />;
};

export default MoveIcon;
