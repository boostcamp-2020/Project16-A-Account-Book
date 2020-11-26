import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs, select } from '@storybook/addon-knobs';
import DropdownButton from '.';

export default {
  title: 'molecules/DropdownHeader',
  component: DropdownButton,
  decorators: [withKnobs],
};

export const dropdownHeader = () => {
  const title = select('title', ['11월', '필터', '드랍다운', ''], '11월');
  const child = new Array(10)
    .fill(0)
    .map((x, i) => i)
    .map((index) => <div key={index}>{index}</div>);
  return (
    <ThemeProvider theme={theme}>
      <DropdownButton title={title}>
        <div>{child}</div>
      </DropdownButton>
    </ThemeProvider>
  );
};
