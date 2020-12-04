import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';
import userRouter from 'routers/api/user';
import accountRouter from 'routers/api/account';
import methodRouter from './method';
import categoryRouter from './category';

const router = new Router();

router.use('/categories', categoryRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/accounts', accountRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/methods', methodRouter.routes());
router.use('/user', userRouter.routes());

export default router;
