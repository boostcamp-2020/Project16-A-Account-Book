import Router from 'koa-router';
import transactionRouter from './transaction';
import authRouter from './auth';

const router = new Router();

router.use('/transactions', transactionRouter.routes());
router.use('/auth', authRouter.routes());

export default router;
