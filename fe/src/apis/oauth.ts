import axios from './axios';
import url from './urls';

export default {
  async getGitHubOAuth(): Promise<any> {
    return axios.get(`${url.github}`);
  },
};
