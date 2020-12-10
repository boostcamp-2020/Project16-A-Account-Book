import React from 'react';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import AccountTitleImageUpdate from 'components/organisms/AccountImageTitleUpdate';
import AccountSubmitButtonList from 'components/organisms/AccountSubmitButtonList';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import axios from 'apis/axios';
import url from 'apis/urls';
import { AccountStore } from 'stores/Account';

interface Props {
  location?: any;
}

const submitHandler = (
  history: any,
  isNewAccount: boolean,
  accountObjId = '',
  userObjIdList: Array<String>,
  AccountStoreReload: any,
) => () => {
  const title = AccountStore.accountUpdateTitle;
  if (isNewAccount) {
    axios.post(url.account, {
      title,
      userObjIdList,
    });
  } else {
    if (accountObjId === '') {
      console.error('accountObjId 를 넣어주세요');
    }
    axios.put(url.accountUpdate(accountObjId), {
      title,
      userObjIdList,
    });
  }
  AccountStoreReload();

  history.goBack();
};

const deleteHandler = (
  history: any,
  isOwner: boolean,
  accountObjId: string,
  AccountStoreReload: any,
) => () => {
  if (isOwner) {
    axios.delete(url.accountUpdate(accountObjId));
  } else {
    // TODO: 해당 user만 account users목록에서 빼는 api호출
  }
  AccountStoreReload();
  history.goBack();
};

const AccountUpdatePage = ({ location }: Props) => {
  const history = useHistory();
  const { account, isNewAccount } = location.state;
  const userObjIdList = account.users.map((user: any) => {
    return user._id;
  });
  const isOwner = true;
  if (AccountStore.accountUpdateTitle === '') {
    AccountStore.setAccountUpdateTitle('새 가계부를 입력하세요');
  }

  const Contents = (
    <>
      <AccountTitleImageUpdate
        account={account}
        title={AccountStore.accountUpdateTitle}
      />
    </>
  );

  const Footer = (
    <AccountSubmitButtonList
      onSubmitClick={submitHandler(
        history,
        isNewAccount,
        account._id,
        userObjIdList,
        AccountStore.loadAccounts.bind(AccountStore),
      )}
      onCancelClick={() => history.goBack()}
      onDeleteClick={deleteHandler(
        history,
        isOwner,
        account._id,
        AccountStore.loadAccounts.bind(AccountStore),
      )}
      isOwner={isOwner}
      isNewAccount={isNewAccount}
    />
  );

  return (
    <Template HeaderBar={<Header />} Contents={Contents} NavBar={Footer} />
  );
};

export default observer(AccountUpdatePage);
