import makeQueryString from 'utils/query';
import axios from './axios';
import url from './urls';

export default {
  getCategories(accountObjId: string) {
    return axios.get(url.category(accountObjId));
  },
  getCategoryStatistics(accountObjId: string, query: object) {
    return axios.get(
      `${url.statistics(accountObjId)}${makeQueryString(query)}`,
    );
  },
};
