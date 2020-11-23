import Koa from 'koa';
import mongoose from 'mongoose';
import authRouter from './router/auth';
import { dbConfig } from './config';

const app = new Koa();

const DB_URL = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(authRouter.routes());
app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
