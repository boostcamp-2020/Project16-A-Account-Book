import Router from 'koa-router';
import authRouter from './authRouter';

const router = new Router();

// const test = async (ctx: Koa.Context) => {
//   ctx.body = 'test';
// };

router.use('/auth', authRouter.routes());

// router.get('/', test);

export default router;
