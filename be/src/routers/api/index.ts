import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';

const router = new Router();

router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());

export default router;
