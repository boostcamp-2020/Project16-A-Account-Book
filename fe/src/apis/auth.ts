import axios from 'axios';
import urls from './urls';

export default {
  getAccessToken(code: string) {
    return axios.get(
      `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${urls.githubAccessToken}${code}`,
      { withCredentials: true },
    );
  },
};
