import Router from 'koa-router';
import koaCompose from 'koa-compose';
import transactionController from 'controllers/transaction';
import { isValidPrice } from 'middlewares';

const router = new Router();

router.delete('/:transactionObjId', transactionController.deleteTransaction);
router.get('/detail/:transactionObjId', transactionController.getTransaction);
router.put(
  '/update/:transactionObjId',
  koaCompose([isValidPrice, transactionController.updateTransaction]),
);
router.get('/', transactionController.getTransactionList);
router.post('/', koaCompose([isValidPrice, transactionController.post]));
export default router;
