import axios from './axios';
import url from './urls';

type IAccountId = {
  _id: string;
};
export default {
  getAccount() {
    return axios.get(`${url.account}`);
  },
  getAccountInfo(owner: string, title: string): Promise<IAccountId> {
    return axios.get(url.accountInfo(owner, title));
  },
};
