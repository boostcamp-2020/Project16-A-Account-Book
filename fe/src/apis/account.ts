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
  createAccount(title: string, userObjIdList: string[]) {
    return axios.post(url.account, { title, userObjIdList });
  },
  updateAccount(accountId: string, title: string, userObjIdList: string[]) {
    return axios.put(url.accountUpdate(accountId), {
      title,
      userObjIdList,
    });
  },
  deleteAccount(accountId: string) {
    return axios.delete(url.accountUpdate(accountId));
  },
};
