import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/HeaderNav';
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
) => () => {
  TransactionStore.setAccountObjId(accountObjId);
  history.push(`/transactions/${accountTitle}`);
};

const MainPage = () => {
  const history = useHistory();
  const List = toJS(AccountStore.accountList).map((el) => {
    return (
      <Account
        // eslint-disable-next-line no-underscore-dangle
        key={el._id}
        account={{ ...el, icon: AccountSvg }}
        // eslint-disable-next-line no-underscore-dangle
        onClick={onClickHandler(history, el._id, el.title)}
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
