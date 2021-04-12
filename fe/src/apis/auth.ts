import axios from './axios';
import urls from './urls';

export default {
  async getAccessToken(
    code: string | string[],
    state: string | string[] | null,
  ) {
    console.log(code);
    let url = '';
    if (state === 'github') {
      url = `${urls.githubAccessToken}${code}`;
    }
    if (state === 'facebook') {
      url = `${urls.facebookAccessToken}${code}`;
    }
    console.log(url);
    return axios.get(url);
  },
};
