import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import theme from 'styles/theme';
import Input from '.';

export default {
  title: 'Atoms / Input',
  decorators: [withKnobs],
};

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value);
};

export const defaultInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input placeholder="입력하세요" onChangeHandler={onChangeHandler} />
    </ThemeProvider>
  );
};

export const disabledInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input
        disabled
        placeholder="disabled"
        onChangeHandler={onChangeHandler}
      />
    </ThemeProvider>
  );
};

export const typeInput = () => {
  const type = select(
    'type',
    ['number', 'date', 'month', 'tel', 'email', 'checkbox'],
    'date',
  );

  return (
    <ThemeProvider theme={theme}>
      <Input type={type} onChangeHandler={onChangeHandler} />
    </ThemeProvider>
  );
};
