import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
export default instance;
