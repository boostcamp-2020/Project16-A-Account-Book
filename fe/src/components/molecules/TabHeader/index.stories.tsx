import React from 'react';
import TabHeader from '.';

export default {
  title: 'Molecules / TabHeader',
};

const onClickHandler = () => {
  console.log('tab clicked');
};

export const defaultTabHeader = () => {
  return <TabHeader onClickHandler={onClickHandler} />;
};
