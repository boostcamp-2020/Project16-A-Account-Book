import Router from 'koa-router';
import transactionRouter from 'router/api/transaction';

const router = new Router();

router.use('/transaction', transactionRouter.routes());

export default router;
