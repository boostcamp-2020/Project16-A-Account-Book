import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  type: process.env.DB_TYPE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

const hostConfig = {
  url: process.env.REACT_APP_API_URL,
  port: process.env.REACT_APP_API_PORT,
  frontPort: process.env.PORT,
};

export const getDbUri = () => {
  const localUri = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  const srvUri = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`;
  return dbConfig.port ? localUri : srvUri;
};

export const jwtString: string = process.env.JWT_SECRET || '모듈화수정?';

export const getHostUrl = () => {
  return `http://${hostConfig.url}:${hostConfig.port}`;
};

export const getFrontUrl = () => {
  return `http://${hostConfig.url}:${hostConfig.frontPort}`;
};

export default {};
