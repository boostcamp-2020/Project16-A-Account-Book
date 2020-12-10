import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';

import Dropdown from '.';

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
};

export const dropdown = () => {
  const title = 'test';
  const dataList = [{ title: '1' }, { title: '2' }, { title: '3' }];
  const onClick = () => {};
  return (
    <GlobalThemeProvider>
      <Dropdown title={title} dataList={dataList} onClick={onClick} />
    </GlobalThemeProvider>
  );
};

export const UserDropdown = () => {
  const title = '친구를 초대해보세요 ';
  const userList = [
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
      nickname: 'yejineee2',
      profileUrl: 'https://avatars2.githubusercontent.com/u/43772082?v=4',
      __v: 0,
    },
    {
      timezone: 'Asia/Seoul',
      startOfWeek: 'sunday',
      _id: '5fd1b170b829e92efec991ec',
      id: '43772082',
      nickname: 'yejineee3',
      profileUrl: 'https://avatars2.githubusercontent.com/u/43772082?v=4',
      __v: 0,
    },
  ];
  const onClick = () => {};
  return (
    <GlobalThemeProvider>
      <Dropdown title={title} dataList={userList} onClick={onClick} />
    </GlobalThemeProvider>
  );
};
