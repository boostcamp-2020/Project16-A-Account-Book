import React from 'react';
import plusSvg from 'assets/svg/plus.svg';
import githubSvg from 'assets/svg/github.svg';
import naverSvg from 'assets/svg/naver.svg';
import IconStyle from './style';

export interface Props {
  icon: string;
  size?: string;
}

export const iconTypes = {
  plus: plusSvg,
  github: githubSvg,
  naver: naverSvg,
};

const Icon = ({ icon, size = 'md', ...props }: Props): React.ReactElement => {
  return <IconStyle src={icon} alt="icon" size={size} {...props} />;
};

export default Icon;
