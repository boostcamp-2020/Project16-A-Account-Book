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
  alreadyInvitedUser?: IUser[],
): [IUser[], string[], any] => {
  const [userList, setUserList] = useState(initialState);
  const [checkedUserIdList, setCheckedUserIdList] = useState([]);

  const loadAndSetUserList = async () => {
    const loadedUserList = await userAPI.getUserList();
    setUserList(loadedUserList);
    if (alreadyInvitedUser) {
      deleteInvitedUser();
    }
  };

  const deleteInvitedUser = () => {
    const alreadyInvitedUserId = alreadyInvitedUser?.map(
      (invitedUser) => invitedUser._id,
    );
    setUserList((initialUserList: IUser[]) =>
      initialUserList.filter(
        (user) => !alreadyInvitedUserId?.includes(user._id),
      ),
    );
  };

  useEffect(() => {
    loadAndSetUserList();
  }, []);
  return [userList, checkedUserIdList, setCheckedUserIdList];
};
export default useInviteUser;
