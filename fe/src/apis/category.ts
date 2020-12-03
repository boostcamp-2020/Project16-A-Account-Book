import axios from './axios';
import url from './urls';

export default {
  getCategories(accountObjId: string) {
    return axios.get(url.category(accountObjId));
  },
};
