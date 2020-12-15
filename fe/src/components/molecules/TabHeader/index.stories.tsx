import React from 'react';
import TabHeader from '.';

export default {
  title: 'Molecules / TabHeader',
};

const onClickHandler = () => {
  console.log('tab clicked');
};

const selectedTab = -1;

export const defaultTabHeader = () => {
  return (
    <TabHeader onClickHandler={onClickHandler} selectedTab={selectedTab} />
  );
};
