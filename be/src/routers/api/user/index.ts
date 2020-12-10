import Router from 'koa-router';
import * as userController from 'controllers/user';
import accountRouter from './account';

const router = new Router();

router.get('/titleByAccountId', userController.titleByAccountId);
router.use('/accounts', accountRouter.routes());
export default router;
