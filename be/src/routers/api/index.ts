import Router from 'koa-router';
import transactionRouter from './transaction';
import authRouter from './auth';
import userRouter from './user';

const router = new Router();

router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/user', userRouter.routes());

export default router;
