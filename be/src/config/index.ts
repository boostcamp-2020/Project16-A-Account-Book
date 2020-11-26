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

export const getDbUri = () => {
  const localUri = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  const srvUri = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`;
  return dbConfig.port ? localUri : srvUri;
};

export default {};
