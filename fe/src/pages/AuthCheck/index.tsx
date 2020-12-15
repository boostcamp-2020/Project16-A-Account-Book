import React from 'react';
import userApi from 'apis/user';

const AuthCheck = () => {
  if (!sessionStorage.getItem('userObjId')) {
    userApi.getUserInfo().then((res) => {
      sessionStorage.setItem('userObjId', (res as any)._id);
      sessionStorage.setItem(
        'userIsSundayStart',
        String((res as any).startOfWeek === 'sunday'),
      );
    });
  }
  return <></>;
};

export default AuthCheck;
