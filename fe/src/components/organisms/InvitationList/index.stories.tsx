import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import InvitationList from '.';

export default {
  title: 'organisms/InvitationList',
  component: InvitationList,
};

export const ivitationList = () => {
  return (
    <GlobalThemeProvider>
      <InvitationList />
    </GlobalThemeProvider>
  );
};
