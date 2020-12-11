import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import ProfilName from '.';

export default {
  title: 'Molecules / ProfileName',
};

export const Default = () => {
  const profileUrl = 'https://avatars2.githubusercontent.com/u/43772082?v=4';
  const nickname = 'yejin';
  return (
    <GlobalThemeProvider>
      <ProfilName imgUrl={profileUrl} name={nickname} />
    </GlobalThemeProvider>
  );
};
