import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Message from '.';

export default {
  title: 'atoms/Message',
  component: Message,
  decorators: [withKnobs],
};
export const priceTag = () => {
  const tag = select('tag', ['error', 'warning', 'info', 'success'], 'error');
  return (
    <GlobalThemeProvider>
      <Message tag={tag}>message입니다!</Message>
    </GlobalThemeProvider>
  );
};
