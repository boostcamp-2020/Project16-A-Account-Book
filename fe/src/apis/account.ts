import axios from './axios';
import url from './urls';

export default {
  getAccount() {
    return axios.get(`${url.account}`);
  },
  getAccountInfo(owner: string, title: string) {
    return axios.get(url.accountInfo(owner, title));
  },
};
