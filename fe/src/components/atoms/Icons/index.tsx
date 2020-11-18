import React, { FC } from 'react';
import PlusSvg from '../../../assets/svg/plus';
import GithubSvg from '../../../assets/svg/github';
import NaverSvg from '../../../assets/svg/naver';

export interface Props {
  icon: React.ReactElement;
}

export const types = {
  plus: <PlusSvg />,
  github: <GithubSvg />,
  smNaver: <NaverSvg size="sm" />,
  midNaver: <NaverSvg size="mid" />,
};

const Icon: FC<Props> = ({ icon }): React.ReactElement => {
  return icon;
};

export default Icon;
