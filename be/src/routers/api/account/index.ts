import Router from 'koa-router';
import accountController from 'controllers/account';

const router = new Router();

router.get('/info', accountController.getThisAccountInfo);
router.get('/', accountController.get);
router.post('/', accountController.postAccount);
router.post('/user', accountController.postAccountUser);

export default router;
