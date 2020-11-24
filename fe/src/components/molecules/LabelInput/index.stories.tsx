import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import LabelInput from '.';

export default {
  title: 'molecules/LabelInput',
  component: LabelInput,
  decorators: [withKnobs],
};

export const memoLabelInput = () => {
  const type = select(
    'type',
    ['text', 'number', 'date', 'month', 'tel', 'email', 'checkbox'],
    'text',
  );
  return (
    <ThemeProvider theme={theme}>
      <LabelInput
        labelFor="memo"
        name="memo"
        title="카테고리"
        placeholder="메모를 입력하세요"
        type={type}
      />
    </ThemeProvider>
  );
};
