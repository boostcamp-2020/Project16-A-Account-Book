import React, { useEffect } from 'react';
import { TransactionStore } from 'stores/Transaction';

const AuthCheck = () => {
  useEffect(() => {
    const account = sessionStorage.getItem('account');
    if (account) {
      TransactionStore.setAccountObjId(JSON.parse(account).id);
    }
  });
  return <></>;
};

export default AuthCheck;
