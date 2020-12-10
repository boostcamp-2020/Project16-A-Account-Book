import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import InviteUser from '.';

export default {
  title: 'organisms/InviteUser',
  component: InviteUser,
};

const users = [
  {
    timezone: 'Asia/Seoul',
    startOfWeek: 'sunday',
    _id: '5fd1b170b829e92efec991ec',
    id: '43772082',
    nickname: 'yejineee',
    profileUrl: 'https://avatars2.githubusercontent.com/u/43772082?v=4',
    __v: 0,
  },
  {
    timezone: 'Asia/Seoul',
    startOfWeek: 'sunday',
    _id: '5fd1b170b829e92efec991ec',
    id: '43772082',
    nickname: 'hihi',
    profileUrl: 'https://avatars2.githubusercontent.com/u/43772082?v=4',
    __v: 0,
  },
];

export const InviteUserDefault = () => {
  return (
    <GlobalThemeProvider>
      <InviteUser dataList={users} onClick={() => {}} />
    </GlobalThemeProvider>
  );
};
