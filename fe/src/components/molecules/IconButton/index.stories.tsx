import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import homeSvg from 'assets/svg/home.svg';
import IconButton from '.';

export default {
  title: 'molecules / IconButton',
  component: IconButton,
  decorators: [withKnobs],
};

export const HomeIconButton = () => {
  const size = select('size', [...Object.keys(theme.len), '10rem'], 'md');
  const onClick = () => alert('icon button clicked');
  return (
    <ThemeProvider theme={theme}>
      <IconButton icon={homeSvg} size={size} onClick={onClick}>
        home
      </IconButton>
    </ThemeProvider>
  );
};
