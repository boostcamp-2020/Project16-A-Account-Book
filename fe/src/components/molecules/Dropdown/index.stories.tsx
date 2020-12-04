import React from 'react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';

import Dropdown from '.';

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
};

export const dropdown = () => {
  const title = 'test';
  const dataList = [1, 2, 3, 4, 5];
  const onClick = () => {};
  return (
    <GlobalThemeProvider>
      <Dropdown title={title} dataList={dataList} onClick={onClick} />
    </GlobalThemeProvider>
  );
};
