import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import NavBarComponent from 'components/organisms/NavBar';
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
  TransactionStore.setAccountObjId(accountObjId);
  history.push(`/transactions/${accountOwner}/${accountTitle}`);
};

const MainPage = () => {
  const history = useHistory();
  const List = AccountStore.getAccountList().map((el) => {
    return (
      <Account
        key={el._id}
        account={{ ...el, icon: AccountSvg }}
        onClick={onClickHandler(history, el._id, el.title, el.owner)}
      />
    );
  });
  const Contents = <>{List}</>;

  useEffect(() => {
    AccountStore.loadTransactions();
  }, []);

  return (
    <Template
      HeaderBar={<Header />}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(MainPage);
