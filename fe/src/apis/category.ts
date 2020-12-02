import axios from './axios';
import url from './urls';

export default {
  getCategories(accountObjId: string) {
    return axios.get(
      `http://${process.env.REACT_APP_API_URL}:${
        process.env.REACT_APP_API_PORT
      }${url.category(accountObjId)}`,
    );
  },
};
