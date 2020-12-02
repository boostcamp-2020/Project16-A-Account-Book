import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from './routers';
import { connect as dbConnect } from './models';
import { corsOptions } from './config';

const app = new Koa();
dbConnect();
app.use(cors(corsOptions));

app.use(bodyParser());
app.use(Router.routes());
app.use(Router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
