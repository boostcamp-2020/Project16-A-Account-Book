import Router from 'koa-router';
import koaCompose from 'koa-compose';
import accountController from 'controllers/account';
import { isVaildLengthTitle } from 'middlewares';

const router = new Router();

router.get('/info', accountController.getThisAccountInfo);
router.get('/', accountController.get);
router.post(
  '/',
  koaCompose([
    isVaildLengthTitle,
    accountController.postAccount,
  ]),
);
router.put(
  '/',
  koaCompose([
    isVaildLengthTitle,
    accountController.putAccount,
  ]),
);
router.del('/', accountController.deleteAccount);
router.post('/user', accountController.postAccountUser);
router.delete('/user', accountController.deleteAccountUser);

export default router;
