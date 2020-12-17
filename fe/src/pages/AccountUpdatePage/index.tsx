import React, { useEffect, useRef, useState } from 'react';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import AccountTitleImageUpdate from 'components/organisms/AccountImageTitleUpdate';
import InviteUser from 'components/organisms/InviteUser';
import useInviteUser from 'hooks/useInviteUser';
import utils from 'utils';
import { IUser } from 'types';
import AccountSubmitButtonList from 'components/organisms/AccountSubmitButtonList';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import accountAPI from 'apis/account';
import { AccountStore, accountItem } from 'stores/Account';

interface Props {
  location?: any;
}

const deleteHandler = (
  history: any,
  isOwner: boolean,
  accountObjId: string,
) => async () => {
  if (isOwner) {
    await accountAPI.deleteAccount(accountObjId);
  } else {
    await accountAPI.deleteAccountUser(accountObjId);
  }
  AccountStore.loadAccounts();
  history.goBack();
};

const accountTitleVerify = (title: string, originTitle: string) => {
  if (title.length < 2) {
    return '2자리 이상 입력하세요';
  }
  if (title.length > 20) {
    return '20자리 이하로 입력하세요';
  }
  const notDuplicated = AccountStore.getAccountList().every(
    (account: accountItem) => {
      if (originTitle === account.title) return true;
      return account.title !== title;
    },
  );
  if (!notDuplicated) {
    return '중복된 가계부 이름 입니다.';
  }
  return '';
};

const AccountUpdatePage = ({ location }: Props) => {
  const history = useHistory();
  const { account, isNewAccount } = location.state;
  const alreadyInvitedUserIdList = account.users.map((user: any) => user._id);
  const [userList, checkedUserIdList, setCheckedUserIdList] = useInviteUser(
    alreadyInvitedUserIdList,
  );
  const isOwner =
    sessionStorage.getItem('userObjId') === alreadyInvitedUserIdList[0];
  const titleInputRef = useRef<any>('');
  const [titleErrorMessage, setTitleErrorMessage] = useState<string>('');
  useEffect(() => {
    titleInputRef.current.value = account.title;
  }, []);

  const onSelectUser = (user: IUser) => {
    const selectedId = user._id;
    if (selectedId === 'ALL') {
      if (checkedUserIdList.length === userList.length) {
        setCheckedUserIdList([]);
      } else {
        setCheckedUserIdList(userList.map((userData) => userData._id));
      }
    } else {
      setCheckedUserIdList((prevCheckedList: string[]) =>
        utils.toggleTargetInList<string>(prevCheckedList, selectedId),
      );
    }
  };

  const submitHandler = async () => {
    const title = titleInputRef.current.value;

    const verifyResult = accountTitleVerify(title, account.title);

    if (verifyResult !== '') {
      setTitleErrorMessage(verifyResult);
      return;
    }
    let serverMessage = '';
    if (isNewAccount) {
      const result: any = await accountAPI.createAccount(
        title,
        checkedUserIdList,
      );

      if (result.error) {
        serverMessage = result.error;
      }
    } else {
      const result: any = await accountAPI.updateAccount(
        account._id,
        title,
        checkedUserIdList,
      );

      if (result.error) {
        serverMessage = result.error;
      }
    }
    if (serverMessage !== '') {
      setTitleErrorMessage(serverMessage);
      AccountStore.loadAccounts();
      return;
    }
    AccountStore.loadAccounts();
    history.goBack();
  };

  const Contents = (
    <>
      <AccountTitleImageUpdate
        account={account}
        errorMessage={titleErrorMessage}
        inputRef={titleInputRef}
      />
      <InviteUser
        dataList={userList}
        onClick={onSelectUser}
        checkList={checkedUserIdList}
      />
    </>
  );

  const Footer = (
    <AccountSubmitButtonList
      onSubmitClick={submitHandler}
      onCancelClick={() => history.goBack()}
      onDeleteClick={deleteHandler(history, isOwner, account._id)}
      isOwner={isOwner}
      isNewAccount={isNewAccount}
    />
  );

  return (
    <Template HeaderBar={<Header />} Contents={Contents} NavBar={Footer} />
  );
};

export default observer(AccountUpdatePage);
