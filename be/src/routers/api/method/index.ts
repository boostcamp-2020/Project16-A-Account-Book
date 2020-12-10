import Router from 'koa-router';
import methodController from 'controllers/method';
import koaCompose from 'koa-compose';
import { titleIsUnclassified } from 'middlewares';

const router = new Router();

router.get('/', methodController.get);
router.post('/', koaCompose([titleIsUnclassified, methodController.post]));
router.delete('/:methodObjId', methodController.del);
router.put(
  '/:methodObjId',
  koaCompose([titleIsUnclassified, methodController.put]),
);

export default router;
