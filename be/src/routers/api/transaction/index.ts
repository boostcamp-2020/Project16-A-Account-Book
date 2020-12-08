import Router from 'koa-router';
import transactionController from 'controllers/transaction';

const router = new Router();

router.get('/detail/:transactionObjId', transactionController.getTransaction);
router.put(
  '/update/:transactionObjId',
  transactionController.updateTransaction,
);
router.delete(':transactionObjId', transactionController.deleteTransaction);
router.get('/', transactionController.getTransactionList);
router.post('/', transactionController.post);
export default router;
