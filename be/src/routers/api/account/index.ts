import Router from 'koa-router';
import accountController from 'controllers/account';

const router = new Router();

router.get('/info', accountController.getThisAccountInfo);
router.get('/', accountController.get);

export default router;
