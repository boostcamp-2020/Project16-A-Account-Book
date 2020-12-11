import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AccountSubmitButtonList from '.';

export default {
  title: 'organisms/AccountSubmitButtonList',
  component: AccountSubmitButtonList,
};

export const OwnerNew = () => {
  return (
    <GlobalThemeProvider>
      <AccountSubmitButtonList isOwner isNewAccount />
    </GlobalThemeProvider>
  );
};

export const NotOwnerNotNew = () => {
  return (
    <GlobalThemeProvider>
      <AccountSubmitButtonList isOwner={false} isNewAccount={false} />
    </GlobalThemeProvider>
  );
};
