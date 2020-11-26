import Router from 'koa-router';
import apiRouter from './api';

const router = new Router();

// const test = async (ctx: Koa.Context) => {
//   ctx.body = 'test';
// };

router.use('/api', apiRouter.routes());

// router.get('/', test);

export default router;
