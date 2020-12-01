import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routers from 'routers';
import cors from '@koa/cors';
import { connect as dbConnect } from 'models/database';

const app = new Koa();
dbConnect();

app.use(bodyParser());
app.use(cors());
app.use(routers.routes());
app.use((ctx: Koa.Context) => {
  ctx.body = 'hello, Koa!';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
