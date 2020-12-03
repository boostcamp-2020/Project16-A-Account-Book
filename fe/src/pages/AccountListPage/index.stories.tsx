import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AccountList from '.';

export default {
  title: 'pages/AccountList',
  component: AccountList,
  decorators: [withKnobs],
};

export const AccountListDefault = () => {
  return (
    <GlobalThemeProvider>
      <AccountList />
    </GlobalThemeProvider>
  );
};
