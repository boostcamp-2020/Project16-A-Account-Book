import Router from 'koa-router';
import transactionRouter from 'src/routers/api/transaction';
import authRouter from 'src/routers/api/auth';

const router = new Router();

router.use('/transaction', transactionRouter.routes());
router.use('/auth', authRouter.routes());

export default router;
