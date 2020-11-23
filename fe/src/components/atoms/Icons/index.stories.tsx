import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import Icon, { iconTypes } from '.';

export default {
  title: 'atoms/Icon',
  decorators: [withKnobs],
};

export const GithubIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={iconTypes.github} size={size} />
    </ThemeProvider>
  );
};
export const NaverIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={iconTypes.naver} size={size} />
    </ThemeProvider>
  );
};
export const PlusIcon = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');

  return (
    <ThemeProvider theme={theme}>
      <Icon icon={iconTypes.plus} size={size} />
    </ThemeProvider>
  );
};
