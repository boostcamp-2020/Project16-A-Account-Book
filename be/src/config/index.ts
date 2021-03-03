import { Context } from 'koa';
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
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
  jwtExpires: process.env.EXPIRES_IN,
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

export const getFrontUrl = () => {
  const port = process.env.NODE_ENV === 'development' ? ':3000' : '';
  return `${hostConfig.url}${port}`;
};

export const corsOptions = {
  origin: (ctx: Context) => ctx.request.header.origin || '*',
  credentials: true,
};
