import Router from 'koa-router';
import accountController from 'controllers/account';

const router = new Router();

router.get('/info', accountController.getThisAccountInfo);
router.get('/', accountController.get);
router.post('/', accountController.postAccount);
router.put('/', accountController.putAccount);
router.del('/', accountController.deleteAccount);
router.post('/user', accountController.postAccountUser);

export default router;
