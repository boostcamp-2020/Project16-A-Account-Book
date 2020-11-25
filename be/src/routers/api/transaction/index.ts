import Router from 'koa-router';
import transactionController from 'src/controllers/transaction';

const router = new Router();

router.get('/', transactionController.get);
router.post('/', transactionController.post);

export default router;
