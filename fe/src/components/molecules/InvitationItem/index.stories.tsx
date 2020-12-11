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
  const host = 'host';
  const accountObjId = '123123123123';
  return (
    <GlobalProvider>
      <InvitationItem
        host={host}
        accountObjId={accountObjId}
        ownerName={owner}
        accountProfile={src}
        title={title}
      />
    </GlobalProvider>
  );
};
