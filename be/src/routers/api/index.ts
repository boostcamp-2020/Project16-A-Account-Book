import Router from 'koa-router';
import transactionRouter from 'routers/api/transaction';
import authRouter from 'routers/api/auth';
import userRouter from 'routers/api/user';
import accountRouter from 'routers/api/account';
import { authorization, verifyAccountAccess } from 'middlewares';
import methodRouter from './method';
import categoryRouter from './category';
import mmsRouter from './mms';

const router = new Router();
router.use('/auth', authRouter.routes());

router.use(authorization);
router.use('/users', userRouter.routes());
router.use('/accounts', accountRouter.routes());
router.use('/mms', mmsRouter.routes());

router.use('/:accountObjId', verifyAccountAccess);
router.use('/:accountObjId/accounts', accountRouter.routes());
router.use('/:accountObjId/categories', categoryRouter.routes());
router.use('/:accountObjId/transactions', transactionRouter.routes());
router.use('/:accountObjId/methods', methodRouter.routes());

export default router;
