import axios from './axios';
import urls from './urls';

export default {
  getTitleById(accountObjId: string) {
    return axios.get(`${urls.userTitle}${accountObjId}`);
  },
  getUserList() {
    return axios.get(urls.user);
  },
};
