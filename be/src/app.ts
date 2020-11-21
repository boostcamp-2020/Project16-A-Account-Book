import Koa from 'koa';
import { connect as dbConnect } from './models';

const app = new Koa();
dbConnect();

app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
