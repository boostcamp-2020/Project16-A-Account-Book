import Router from 'koa-router';
import transactionController from 'controllers/transaction';

const router = new Router();

router.get('/:transactionObjId/detail', transactionController.getTransaction);
router.get('/:accountObjId', transactionController.getTransactionList);
router.post('/:accountObjId', transactionController.post);
export default router;
