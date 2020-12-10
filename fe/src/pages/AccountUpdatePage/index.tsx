import React, { useEffect } from 'react';
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
import axios from 'apis/axios';
import url from 'apis/urls';
import { AccountStore } from 'stores/Account';
import { toJS } from 'mobx';

interface Props {
  location?: any;
}

const deleteHandler = (
  history: any,
  isOwner: boolean,
  accountObjId: string,
) => () => {
  if (isOwner) {
    axios.delete(url.accountUpdate(accountObjId));
  } else {
    // TODO: 해당 user만 account users목록에서 빼는 api호출
  }
  history.goBack();
};

const AccountUpdatePage = ({ location }: Props) => {
  const history = useHistory();
  const { account, isNewAccount } = location.state;
  const [userList, checkedUserIdList, setCheckedUserIdList] = useInviteUser(
    account.users,
  );

  const userObjIdList = account.users.map((user: any) => {
    return user._id;
  });
  useEffect(() => {
    AccountStore.setUserObjIdList([...userObjIdList, ...checkedUserIdList]);
  }, [checkedUserIdList]);
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
    const title = AccountStore.accountUpdateTitle;
    if (isNewAccount) {
      await axios.post(url.account, {
        title,
        userObjIdList: [...toJS(AccountStore.userObjIdList)],
      });
      AccountStore.loadAccounts();
    } else {
      await axios.put(url.accountUpdate(account._id), {
        title,
        userObjIdList: toJS(AccountStore.userObjIdList),
      });
      AccountStore.loadAccounts();
    }
    history.goBack();
  };

  const isOwner = true;
  AccountStore.setAccountUpdateTitle(account.title);

  const Contents = (
    <>
      <AccountTitleImageUpdate account={account} />
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
