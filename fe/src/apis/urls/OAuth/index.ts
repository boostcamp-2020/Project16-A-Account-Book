import axios from 'axios';

export const getGithubUrl = async () => {
  const data = await axios.get(
    `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/auth/github`,
  );
  return data;
};

export default getGithubUrl;
