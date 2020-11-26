import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from './routers';
import { connect as dbConnect } from './models';

const app = new Koa();
dbConnect();
const corsOptions = {
  origin: (ctx: Koa.Context) => ctx.request.header.origin,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(bodyParser());
app.use(Router.routes());
app.use(Router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
