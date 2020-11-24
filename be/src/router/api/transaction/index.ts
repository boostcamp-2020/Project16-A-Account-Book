import Router from 'koa-router';
import transactionController from 'controller/transaction';

const router = new Router();

router.get('/', transactionController.get);
router.post('/', transactionController.post);

export default router;
