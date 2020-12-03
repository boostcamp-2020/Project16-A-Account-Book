import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
  // timeout: 1000,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
export default instance;
