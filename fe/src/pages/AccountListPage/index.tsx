import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import { AccountStore } from 'stores/Account';
import Account from 'components/organisms/Account';
import { useHistory } from 'react-router-dom';
import AccountSvg from 'assets/svg/account.svg';
import userApi from 'apis/user';
import * as S from './styles';

const setSessionByAccountIno = (
  accountObjId: string,
  accountTitle: string,
  accountOwner: string,
) => {
  const accountInfo = {
    title: accountTitle,
    owner: accountOwner,
    id: accountObjId,
  };
  sessionStorage.setItem('account', JSON.stringify(accountInfo));
};

const setTransactionStorageInfo = (accountObjId: string) => {
  TransactionStore.resetFilter();
  TransactionStore.setAccountObjId(accountObjId);
};

const onClickHandler = (
  history: any,
  accountObjId: string,
  accountTitle: string,
  accountOwner: string,
) => () => {
  setSessionByAccountIno(accountObjId, accountTitle, accountTitle);
  sessionStorage.removeItem('filter');
  setTransactionStorageInfo(accountObjId);
  history.push(`/transactions/${accountOwner}/${accountTitle}`);
};

const settingClickHandler = (history: any, account: any) => (e: any) => {
  e.stopPropagation();
  history.push({
    pathname: `/accounts/update`,
    state: {
      account,
      isNewAccount: false,
    },
  });
};

const newAccountClickHandler = (history: any, userId: String) => () => {
  history.push({
    pathname: `/accounts/update`,
    state: {
      account: {
        title: '',
        users: [{ _id: userId }],
      },
      isNewAccount: true,
    },
  });
};

const AccountListPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const userId = sessionStorage.getItem('userObjId');

  useEffect(() => {
    if (!loading) {
      AccountStore.loadAccounts();
    }
  }, [loading]);

  if (!userId && loading === false) {
    setLoading(true);
    userApi.getUserInfo().then((res) => {
      sessionStorage.setItem('userObjId', (res as any).id);
      sessionStorage.setItem(
        'userIsSundayStart',
        String((res as any).startOfWeek === 'sunday'),
      );
      setLoading(false);
    });
    return <>로딩중</>;
  }

  const List = AccountStore.getAccountList().map((el) => {
    console.log(el);
    return (
      <Account
        key={String(el.id) + String(el.title)}
        account={{ ...el, AccountSvg }}
        onClick={onClickHandler(history, el.id, el.title, el.ownerName)}
        onSettingClick={settingClickHandler(history, el)}
      />
    );
  });
  const Contents = <>{List}</>;

  const newAccountBtn = (
    <S.SubmitButton onClick={newAccountClickHandler(history, userId!)}>
      새 가계부
    </S.SubmitButton>
  );

  return (
    <Template
      HeaderBar={<Header title="가계부 목록" />}
      Contents={Contents}
      NavBar={newAccountBtn}
    />
  );
};

export default observer(AccountListPage);
