import React from 'react';
import axios from 'apis/axios';
import url from 'apis/urls';

const AuthCheck = () => {
  if (!sessionStorage.getItem('userObjId')) {
    axios.get(`${url.userInfo}`).then((res) => {
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
