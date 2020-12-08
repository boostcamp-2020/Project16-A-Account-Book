import { useEffect, useState } from 'react';
import accountsAPI from 'apis/account';
import { TransactionStore } from 'stores/Transaction';
import { useLocation, useHistory } from 'react-router-dom';

const useAccountInfo = () => {
  const accountObjId = TransactionStore.getAccountId();
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(accountObjId === '');
  const getAccountInfo = async () => {
    const reg = /(\/transactions\/)(([^/])*)?\/(([^/])*)?/;
    const result = reg.exec(location.pathname);
    const owner = result ? result[2] : null;
    const title = result ? result[4] : null;
    if (!owner || !title) {
      history.push('/accounts');
      return;
    }

    const res = await accountsAPI.getAccountInfo(owner, title);
    TransactionStore.setAccountObjId(res._id);
    setLoading(false);
  };
  useEffect(() => {
    if (loading) {
      getAccountInfo();
    }
  }, []);

  return [loading];
};

export default useAccountInfo;
