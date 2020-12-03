import axios from './axios';
import urls from './urls';

export default {
  async getAccessToken(code: string | string[]) {
    return axios.get(`${urls.githubAccessToken}${code}`);
  },
};
