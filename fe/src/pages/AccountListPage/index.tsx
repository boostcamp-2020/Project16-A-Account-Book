import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import { AccountStore } from 'stores/Account';
import Account from 'components/organisms/Account';
import { useHistory } from 'react-router-dom';
import AccountSvg from 'assets/svg/account.svg';

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
    },
  });
};

const MainPage = () => {
  const history = useHistory();
  const List = AccountStore.getAccountList().map((el) => {
    return (
      <Account
        key={el._id}
        account={{ ...el, icon: AccountSvg }}
        onClick={onClickHandler(history, el._id, el.title, el.ownerName)}
        onSettingClick={settingClickHandler(history, el)}
      />
    );
  });
  const Contents = <>{List}</>;

  useEffect(() => {
    AccountStore.loadTransactions();
  }, []);

  return <Template HeaderBar={<Header />} Contents={Contents} />;
};

export default observer(MainPage);
