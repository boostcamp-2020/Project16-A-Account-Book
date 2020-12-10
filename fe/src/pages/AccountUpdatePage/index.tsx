import React from 'react';
import { observer } from 'mobx-react-lite';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import AccountTitleImageUpdate from 'components/organisms/AccountImageTitleUpdate';
import InviteUser from 'components/organisms/InviteUser';
import useInviteUser from 'hooks/useInviteUser';
import utils from 'utils';
import { IUser } from 'types';

interface Props {
  location?: any;
}

const AccountUpdatePage = ({ location }: Props) => {
  const { account } = location.state;
  const [userList, checkedUserIdList, setCheckedUserIdList] = useInviteUser(
    account.users,
  );

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

  return <Template HeaderBar={<Header />} Contents={Contents} />;
};

export default observer(AccountUpdatePage);
