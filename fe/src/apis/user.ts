import { IInvitaion } from 'components/organisms/InvitationList';
import { IUser } from 'types';
import axios from './axios';
import urls from './urls';

export default {
  getTitleById(accountObjId: string) {
    return axios.get(`${urls.userTitle}${accountObjId}`);
  },
  getUserInvitation(): Promise<IInvitaion[]> {
    return axios.get(urls.getUserInvitation());
  getUserList(): Promise<IUser[]> {
    return axios.get(urls.user);
  },
};
