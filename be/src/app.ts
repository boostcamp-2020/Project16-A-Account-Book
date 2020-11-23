import Koa from 'koa';
import authRouter from 'router/auth';
import { connect as dbConnect } from './models';

const app = new Koa();
dbConnect();

app.use(authRouter.routes());
app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
