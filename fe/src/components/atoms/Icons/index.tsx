import React from 'react';
import IconStyle from './style';

export interface Props {
  icon: string;
  size?: string;
}

const Icon = ({ icon, size = 'md', ...props }: Props): React.ReactElement => {
  return <IconStyle src={icon} alt="icon" size={size} {...props} />;
};

export default Icon;
