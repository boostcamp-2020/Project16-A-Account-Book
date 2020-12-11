import Router from 'koa-router';
import * as userController from 'controllers/user';
import accountRouter from './account';

const router = new Router();

router.get('/userInfo', userController.getUserByAccessToken);
router.get('/titleByAccountId', userController.titleByAccountId);
router.get('/', userController.getUserList);
router.use('/accounts', accountRouter.routes());

export default router;
