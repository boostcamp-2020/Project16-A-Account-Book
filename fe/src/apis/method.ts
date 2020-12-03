import { IMethod } from 'types';
import axios from './axios';
import urls from './urls';

export default {
  getMethods(accountObjId: string): Promise<IMethod[]> {
    return axios.get(urls.method(accountObjId));
  },
};
