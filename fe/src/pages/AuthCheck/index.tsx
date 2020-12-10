import React, { useEffect } from 'react';
import axios from 'apis/axios';
import url from 'apis/urls';

const AuthCheck = () => {
  useEffect(() => {});
  if (!sessionStorage.getItem('userObjId')) {
    axios.get(`${url.userInfo}`).then((res) => {
      sessionStorage.setItem('userObjId', (res as any)._id);
    });
  }
  return <></>;
};

export default AuthCheck;
