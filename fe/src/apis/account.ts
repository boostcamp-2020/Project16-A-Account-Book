import axios from './axios';
import url from './urls';

export default {
  getAccount() {
    return axios.get(`${url.account}`);
  },
};
