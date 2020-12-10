import { useState, useEffect } from 'react';
import userAPI from 'apis/user';
import { IUser } from 'types';

const initialState = [
  {
    timezone: '',
    startOfWeek: '',
    _id: '',
    id: '',
    nickname: '',
    profileUrl: '',
    __v: 0,
  },
];

const useInviteUser = (
  alreadyInvitedUser: string[],
): [IUser[], string[], any] => {
  const [userList, setUserList] = useState(initialState);
  const [checkedUserIdList, setCheckedUserIdList] = useState([]);

  const loadAndSetUserList = async () => {
    const loadedUserList = await userAPI.getUserList();
    setUserList(loadedUserList);
    deleteInvitedUser();
  };

  const deleteInvitedUser = () => {
    setUserList((initialUserList: IUser[]) =>
      initialUserList.filter((user) => !alreadyInvitedUser.includes(user._id)),
    );
  };

  useEffect(() => {
    loadAndSetUserList();
  }, []);
  return [userList, checkedUserIdList, setCheckedUserIdList];
};
export default useInviteUser;
