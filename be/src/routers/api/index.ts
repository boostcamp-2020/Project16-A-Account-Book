import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';
import categoryRouter from './category';
import methodRouter from './method';

import userRouter from './user';

const router = new Router();

router.use('/categories', categoryRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/methods', methodRouter.routes());
router.use('/user', userRouter.routes());

export default router;
