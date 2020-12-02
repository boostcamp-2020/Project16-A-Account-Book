import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import categoryRouter from 'routers/api/category';
import authRouter from 'routers/api/auth';
import userRouter from './user';

const router = new Router();

router.use('/categories', categoryRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/user', userRouter.routes());
router.use('/category', categoryRouter.routes());

export default router;
