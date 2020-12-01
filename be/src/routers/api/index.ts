import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';
import categoryRouter from './category';

const router = new Router();

router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/category', categoryRouter.routes());

export default router;
