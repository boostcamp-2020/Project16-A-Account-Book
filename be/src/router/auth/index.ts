import Koa from 'koa';
import Router from 'koa-router';
import userRouter from './userRouter';

const router = new Router();

const test = async (ctx: Koa.Context) => {
  ctx.body = 'test';
};

router.get('/', test);

router.use('/user', userRouter.routes());

export default router;
