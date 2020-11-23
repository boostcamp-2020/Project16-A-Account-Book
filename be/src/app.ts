import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import authRouter from './router/auth';
import { connect as dbConnect } from './models';

const app = new Koa();
dbConnect();

app.use(bodyParser());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
