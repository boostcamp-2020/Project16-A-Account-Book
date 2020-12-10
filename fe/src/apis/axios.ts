import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    } else {
      window.location.href = '/not-found';
    }
    return Promise.reject(error);
  },
);
export default instance;
