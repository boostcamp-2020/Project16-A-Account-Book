import { Context } from 'koa';
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

export const hostConfig = {
  url: process.env.HOST,
  backPort: process.env.BE_PORT,
  frontPort: process.env.FE_PORT,
};

export const jwtConfig = {
  jwtSecret: process.env.JWT_SECRET || 'jwt_secret',
};

export const githubConfig = {
  githubId: process.env.GITHUB_ID,
  githubSecret: process.env.GITHUB_SECRET,
};

export const getDbUri = () => {
  const localUri = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  const srvUri = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`;
  return dbConfig.port ? localUri : srvUri;
};

export const getHostUrl = () => {
  return `${hostConfig.url}:${hostConfig.backPort}`;
};

export const getFrontUrl = () => {
  return `${hostConfig.url}:${hostConfig.frontPort}`;
};

export const corsOptions = {
  origin: (ctx: Context) => ctx.request.header.origin,
  credentials: true,
};
