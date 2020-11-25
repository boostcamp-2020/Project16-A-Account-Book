import Koa from 'koa';
import authRouter from 'router/auth';
import bodyParser from 'koa-bodyparser';
import router from 'router/index';
import { connect as dbConnect } from './models';

const app = new Koa();
dbConnect();

app.use(bodyParser());
app.use(authRouter.routes());
app.use(router.routes());
app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
