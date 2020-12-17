import Router from 'koa-router';
import koaCompose from 'koa-compose';
import accountController from 'controllers/account';
import { isVaildLengthTitle, isDuplicateAccountTitle } from 'middlewares';

const router = new Router();

router.get('/info', accountController.getThisAccountInfo);
router.get('/', accountController.get);
router.post(
  '/',
  koaCompose([
    isVaildLengthTitle,
    isDuplicateAccountTitle,
    accountController.postAccount,
  ]),
);
router.put(
  '/',
  koaCompose([
    isVaildLengthTitle,
    isDuplicateAccountTitle,
    accountController.putAccount,
  ]),
);
router.del('/', accountController.deleteAccount);
router.post('/user', accountController.postAccountUser);
router.delete('/user', accountController.deleteAccountUser);

export default router;
