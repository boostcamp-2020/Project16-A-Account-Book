import { useEffect, useState } from 'react';
import accountsAPI from 'apis/account';
import { TransactionStore } from 'stores/Transaction';
import { useLocation, useHistory } from 'react-router-dom';

interface IParsedAccountInfo {
  id: string;
  title: string;
  owner: string;
}
const useAccountInfo = () => {
  const accountObjId = TransactionStore.getAccountId();
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(accountObjId === '');

  const setAccountId = (id: string) => {
    TransactionStore.setAccountObjId(id);
    setLoading(false);
  };
  const getAccountInfoRe = async (owner: string, title: string) => {
    const res = await accountsAPI.getAccountInfo(owner, title);
    setAccountId(res._id);
    const accountInfo = {
      owner,
      title,
      id: res._id,
    };
    sessionStorage.setItem('account', JSON.stringify(accountInfo));
  };

  const parseAccountFromSession = (): IParsedAccountInfo | undefined => {
    const accountInfoFromSession = sessionStorage.getItem('account');
    if (!accountInfoFromSession) return undefined;
    return JSON.parse(accountInfoFromSession);
  };

  const getOwnerAndTitleFromUrl = () => {
    const reg = /(\/transactions\/)(([^/])*)?\/(([^/])*)?/;
    const result = reg.exec(location.pathname);
    const owner = result ? result[2] : null;
    const title = result ? result[4] : null;
    return {
      owner,
      title,
    };
  };

  const isVaildParsedAccountInfo = (
    parseAccountInfo: IParsedAccountInfo | undefined,
  ) => {
    if (
      !parseAccountInfo ||
      !parseAccountInfo.owner ||
      !parseAccountInfo.title ||
      !parseAccountInfo.id
    )
      return false;
    return true;
  };

  const isSameOwnerAndTitle = (
    parseURL: any,
    parseSession: IParsedAccountInfo,
  ): boolean =>
    parseURL.owner === parseSession.owner &&
    parseURL.title === parseSession.title;

  const getAccountInfo = async () => {
    const parseAccountInfo = parseAccountFromSession();
    const parseURL = getOwnerAndTitleFromUrl();
    if (!parseURL.owner || !parseURL.title) {
      sessionStorage.removeItem('account');
      history.push('/accounts');
      return;
    }
    if (!isVaildParsedAccountInfo(parseAccountInfo)) {
      getAccountInfoRe(parseURL.owner, parseURL.title);
      return;
    }
    if (isSameOwnerAndTitle(parseURL, parseAccountInfo as IParsedAccountInfo)) {
      setAccountId(parseAccountInfo!.id);
    }
  };
  useEffect(() => {
    if (loading) {
      getAccountInfo();
    }
  }, []);

  return [loading];
};

export default useAccountInfo;
