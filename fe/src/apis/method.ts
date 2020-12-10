import { IMethod } from 'types';
import axios from './axios';
import urls from './urls';

export default {
  getMethods(accountObjId: string): Promise<IMethod[]> {
    return axios.get(urls.method(accountObjId));
  },
  createMethod(accountObjId: string, body: object) {
    return axios.post(urls.method(accountObjId), body);
  },
  removeMethod(accountObjId: string, methodObjId: string) {
    return axios.delete(urls.methodDeleteOrUpdate(accountObjId, methodObjId));
  },
  updateMethod(accountObjId: string, body: object, methodObjId: string) {
    return axios.put(
      urls.methodDeleteOrUpdate(accountObjId, methodObjId),
      body,
    );
  },
};
