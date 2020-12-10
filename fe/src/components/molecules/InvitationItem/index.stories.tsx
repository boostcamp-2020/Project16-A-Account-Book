import React from 'react';
import GlobalProvider from 'styles/GlobalThemeProvider';
import InvitationItem from '.';

export default {
  title: 'molecules/InvitationItem',
  component: InvitationItem,
};

export const invitationItem = () => {
  const src = 'https://avatars3.githubusercontent.com/u/44409642?s=88&v=4';
  const owner = '부스트캠프';
  const title = '가계부우우우우우우우';

  return (
    <GlobalProvider>
      <InvitationItem owner={owner} accountProfile={src} title={title} />
    </GlobalProvider>
  );
};
