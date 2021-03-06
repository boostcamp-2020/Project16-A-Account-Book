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
  getUserInfo(): Promise<IUser> {
    return axios.get(`${urls.userInfo}`);
  },
  agreeInvitation(accountObjId: string) {
    return axios.post(urls.postAndDeleteInvitation(accountObjId));
  },
  denyInvitation(accountObjId: string) {
    return axios.delete(urls.postAndDeleteInvitation(accountObjId));
  },
  putUserStartOfWeek(isSundayStart: boolean) {
    return axios.put(`${urls.userInfo}`, {
      StartOfWeek: isSundayStart ? 'sunday' : 'monday',
    });
  },
};
