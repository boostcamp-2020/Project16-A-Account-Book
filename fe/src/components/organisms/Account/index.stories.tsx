import React from 'react';
import locksvg from 'assets/svg/lock.svg';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Account from '.';

export default {
  title: 'organisms/Account',
  component: Account,
};

const temp = {
  icon: locksvg,
  transactions: [],
  categories: [
    {
      $oid: '5fd08e8c968093c50c5375ab',
    },
    {
      $oid: '5fd08e8c968093c50c5375ac',
    },
    {
      $oid: '5fd08e8c968093c50c5375ad',
    },
    {
      $oid: '5fd08e8c968093c50c5375ae',
    },
    {
      $oid: '5fd08e8c968093c50c5375af',
    },
    {
      $oid: '5fd08e8c968093c50c5375b0',
    },
    {
      $oid: '5fd08e8c968093c50c5375b1',
    },
    {
      $oid: '5fd08e8c968093c50c5375b2',
    },
    {
      $oid: '5fd08e8c968093c50c5375b3',
    },
    {
      $oid: '5fd08e8c968093c50c5375b4',
    },
    {
      $oid: '5fd08e8c968093c50c5375b5',
    },
    {
      $oid: '5fd08e8c968093c50c5375b6',
    },
    {
      $oid: '5fd08e8c968093c50c5375b7',
    },
    {
      $oid: '5fd08e8c968093c50c5375b8',
    },
    {
      $oid: '5fd08e8c968093c50c5375b9',
    },
    {
      $oid: '5fd08e8c968093c50c5375ba',
    },
    {
      $oid: '5fd08e8c968093c50c5375bb',
    },
    {
      $oid: '5fd08e8c968093c50c5375bc',
    },
  ],
  methods: [
    {
      $oid: '5fd08e8c968093c50c5375bd',
    },
    {
      $oid: '5fd08e8c968093c50c5375be',
    },
  ],
  title: 'pkiop',
  ownerName: 'pkiop',
  users: [
    {
      timezone: 'Asia/Seoul',
      startOfWeek: 'sunday',
      _id: {
        $oid: '5fd08e8c968093c50c5375bf',
      },
      id: '34783156',
      nickname: 'pkiop',
      profileUrl: 'https://avatars3.githubusercontent.com/u/34783156?v=4',
    },
    {
      _id: {
        $oid: '5fd097c0398a98d9cc5b3c04',
      },
      timezone: 'Asia/Seoul',
      startOfWeek: 'sunday',
      id: '75725829',
      nickname: 'pkiopb',
      profileUrl: 'https://avatars3.githubusercontent.com/u/75725829?v=4',
      __v: 0,
    },
  ],
  __v: 0,
  _id: {
    $oid: '5fd098105626e7a91eb4b02b',
  },
};

export const AccountSample = () => {
  return (
    <GlobalThemeProvider>
      <Account account={temp} />
    </GlobalThemeProvider>
  );
};
