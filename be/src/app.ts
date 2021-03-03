import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { hostConfig } from 'config';
import Router from './routers';
import { corsOptions } from './config';

const app = new Koa();

const models = require('models');

// DB connect
models.sequelize
  .sync()
  .then(() => {
    console.log('===========DB Connection Success=========');
  })
  .catch((err: any) => {
    console.log('===========DB Connection Fail=========');
    console.log(err);
  });

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
// app.use(Router.routes());
// app.use(Router.allowedMethods());

app.listen(hostConfig.backPort, () => {
  console.log(`Listening to port ${hostConfig.backPort}`);
});
