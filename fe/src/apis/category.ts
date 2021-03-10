import axios from './axios';
import url from './urls';

export default {
  getOneCategory(accountObjId: number, categoryId: number) {
    return axios.get(url.oneCategory(accountObjId, categoryId));
  },
  getCategories(accountObjId: string) {
    return axios.get(url.category(accountObjId));
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
