import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`,
  timeout: 1000,
});

instance.interceptors.request.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
export default instance;
