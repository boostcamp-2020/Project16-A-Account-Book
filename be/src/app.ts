import Koa from 'koa';
import indexRouter from './routes/index';

const app = new Koa();

app.use(indexRouter.routes());

app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
