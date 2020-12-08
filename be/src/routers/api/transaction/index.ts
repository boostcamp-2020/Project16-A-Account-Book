import Router from 'koa-router';
import transactionController from 'controllers/transaction';

const router = new Router();

router.get('/:transactionObjId/detail', transactionController.getTransaction);
router.put('/:transactionObjId', transactionController.updateTransaction);

router.get('/', transactionController.getTransactionList);
router.post('/', transactionController.post);
export default router;
