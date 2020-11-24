import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import plusSvg from 'assets/svg/plus.svg';
import githubSvg from 'assets/svg/github.svg';
import naverSvg from 'assets/svg/naver.svg';
import Icon from '.';

export default {
  title: 'atoms/Icon',
  decorators: [withKnobs],
};

export const GithubIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={githubSvg} size={size} />
    </ThemeProvider>
  );
};
export const NaverIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={naverSvg} size={size} />
    </ThemeProvider>
  );
};
export const PlusIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={plusSvg} size={size} />
    </ThemeProvider>
  );
};
