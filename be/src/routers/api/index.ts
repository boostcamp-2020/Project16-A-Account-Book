import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import categoryRouter from 'routers/api/category';
import authRouter from 'routers/api/auth';
import userRouter from 'routers/api/user';

const router = new Router();

router.use('/categories', categoryRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/user', userRouter.routes());

export default router;
