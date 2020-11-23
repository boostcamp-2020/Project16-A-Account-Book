import Koa from 'koa';
import authRouter from '@Router/auth';

const app = new Koa();

app.use(authRouter.routes());
app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
