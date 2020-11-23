import Router from 'koa-router';
import userRouter from './userRouter';

const router = new Router();

// const test = async (ctx: Koa.Context) => {
//   ctx.body = 'test';
// };

router.use('/user', userRouter.routes());

// router.get('/', test);

export default router;
