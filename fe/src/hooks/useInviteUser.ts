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
    const uninvitedUserList = deleteInvitedUser(loadedUserList);
    setUserList(uninvitedUserList);
  };

  const deleteInvitedUser = (loadedUserList: IUser[]) => {
    return loadedUserList.filter(
      (user) => !alreadyInvitedUser.includes(user._id),
    );
  };

  useEffect(() => {
    loadAndSetUserList();
  }, []);
  return [userList, checkedUserIdList, setCheckedUserIdList];
};
export default useInviteUser;
