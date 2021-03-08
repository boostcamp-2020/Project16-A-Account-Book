import axios from 'axios';
import URL from 'apis/urls';

export const getGithubUrl = async () => {
  console.log(
    `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${URL.github}`,
  );
  const data = await axios.get(
    `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${URL.github}`,
    { withCredentials: true },
  );
  return data;
};

export default getGithubUrl;
