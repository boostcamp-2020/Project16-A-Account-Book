import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';
import categoryRouter from './category';
import methodRouter from './method';

const router = new Router();

router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());
router.use('/category', categoryRouter.routes());
router.use('/method', methodRouter.routes());

export default router;
