import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import LabelWrap from '.';

export default {
  title: 'molecules/LabelWrap',
  component: LabelWrap,
  decorators: [withKnobs],
};

export const memoLabelWrap = () => {
  return (
    <ThemeProvider theme={theme}>
      <LabelWrap htmlFor="memo" title="결제수단">
        <Input placeholder="결제수단을 입력하세요" />
      </LabelWrap>
    </ThemeProvider>
  );
};

export const buttonLabel = () => {
  const onClick = () => {};
  return (
    <ThemeProvider theme={theme}>
      <LabelWrap htmlFor="memo" title="결제수단">
        <>
          <Button onClick={onClick}>수입</Button>
          <Button onClick={onClick}>지출</Button>
          <Button onClick={onClick}>입력</Button>
        </>
      </LabelWrap>
    </ThemeProvider>
  );
};
