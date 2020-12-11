import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import { AccountStore } from 'stores/Account';
import Account from 'components/organisms/Account';
import { useHistory } from 'react-router-dom';
import AccountSvg from 'assets/svg/account.svg';
import Button from 'components/atoms/Button';

const onClickHandler = (
  history: any,
  accountObjId: string,
  accountTitle: string,
  accountOwner: string,
) => () => {
  sessionStorage.setItem(
    'account',
    JSON.stringify({ id: accountObjId, title: accountTitle }),
  );
  sessionStorage.removeItem('filter');
  TransactionStore.resetFilter();
  TransactionStore.setAccountObjId(accountObjId);
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

  const userId = sessionStorage.getItem('userObjId');
  if (!userId) {
    return <></>;
  }

  const List = AccountStore.getAccountList().map((el) => {
    return (
      <Account
        key={String(el._id) + String(el.title)}
        account={{ ...el, icon: el.imageUrl || AccountSvg }}
        onClick={onClickHandler(history, el._id, el.title, el.ownerName)}
        onSettingClick={settingClickHandler(history, el)}
      />
    );
  });
  const Contents = <>{List}</>;

  const newAccountBtn = (
    <Button onClick={newAccountClickHandler(history, userId!)}>
      새 가계부
    </Button>
  );

  useEffect(() => {
    AccountStore.loadAccounts();
  }, []);
  return (
    <Template
      HeaderBar={<Header />}
      Contents={Contents}
      NavBar={newAccountBtn}
    />
  );
};

export default observer(AccountListPage);
