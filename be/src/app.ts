import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { connect as dbConnect } from 'models/database';
import { hostConfig } from 'config';
import Router from './routers';
import { corsOptions } from './config';

const app = new Koa();

dbConnect();
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err;
  }
});
app.use(cors(corsOptions));

app.use(bodyParser());
app.use(Router.routes());
app.use(Router.allowedMethods());

app.listen(hostConfig.backPort, () => {
  console.log(`Listening to port ${hostConfig.backPort}`);
});
