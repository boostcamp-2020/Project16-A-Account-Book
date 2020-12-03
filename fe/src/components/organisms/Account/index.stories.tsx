import React from 'react';
import locksvg from 'assets/svg/lock.svg';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Account from '.';

export default {
  title: 'organisms/Account',
  component: Account,
};

const temp = {
  icon: locksvg,
  title: '가계부1',
};

export const AccountSample = () => {
  return (
    <GlobalThemeProvider>
      <Account account={temp} />
    </GlobalThemeProvider>
  );
};
