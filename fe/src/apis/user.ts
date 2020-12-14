import { IUser } from 'types';
import { IInvitaion } from 'components/organisms/InvitationList';
import axios from './axios';
import urls from './urls';

export default {
  getTitleById(accountObjId: string) {
    return axios.get(`${urls.userTitle}${accountObjId}`);
  },
  getUserList(): Promise<IUser[]> {
    return axios.get(urls.user);
  },
  getUserInvitation(): Promise<IInvitaion[]> {
    return axios.get(urls.getUserInvitation());
  },
  agreeInvitation(accountObjId: string) {
    return axios.post(urls.postAndDeleteInvitation(accountObjId));
  },
  denyInvitation(accountObjId: string) {
    return axios.delete(urls.postAndDeleteInvitation(accountObjId));
  },
};
