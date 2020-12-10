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
  deleteCategory(accountObjId: string, categoryObjId: string) {
    return axios.delete(url.deleteCategory(accountObjId, categoryObjId));
  },
  postCategory(accountObjId: string, body: object) {
    return axios.post(url.categories(accountObjId), body);
  },
  putCategory(accountObjId: string, body: object) {
    return axios.put(url.categories(accountObjId), body);
  },
};
