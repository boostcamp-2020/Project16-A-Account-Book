import axios from './axios';
import urls from './urls';

export default {
  getMethods(accountObjId: string) {
    return axios.get(urls.method(accountObjId));
  },
};
