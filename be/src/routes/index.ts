import Router from 'koa-router';
import userRouter from './userRouter/index';

const router = new Router();

router.use('/user', userRouter.routes());

export default router;
