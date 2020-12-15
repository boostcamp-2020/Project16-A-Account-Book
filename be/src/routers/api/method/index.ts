import Router from 'koa-router';
import methodController from 'controllers/method';
import koaCompose from 'koa-compose';
import { titleIsUnclassified, isVaildLengthTitle } from 'middlewares';

const router = new Router();

router.get('/', methodController.get);
router.post(
  '/',
  koaCompose([titleIsUnclassified, isVaildLengthTitle, methodController.post]),
);
router.delete('/:methodObjId', methodController.del);
router.put(
  '/:methodObjId',
  koaCompose([titleIsUnclassified, isVaildLengthTitle, methodController.put]),
);

export default router;
