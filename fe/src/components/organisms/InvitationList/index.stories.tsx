import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import InvitationList from '.';

export default {
  title: 'organisms/InvitationList',
  component: InvitationList,
};

const src = 'https://avatars3.githubusercontent.com/u/44409642?s=88&v=4';

const dummy = [
  { title: 'one', owner: '주인', accountProfile: src },
  { title: 'two', owner: '주인1', accountProfile: src },
  { title: 'three', owner: '주인2', accountProfile: src },
  { title: 'four', owner: '주인3', accountProfile: src },
];
export const ivitationList = () => {
  return (
    <GlobalThemeProvider>
      <InvitationList list={dummy} />
    </GlobalThemeProvider>
  );
};
