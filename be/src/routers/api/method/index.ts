import Router from 'koa-router';
import methodController from 'controllers/method';

const router = new Router();

router.get('/', methodController.get);
router.post('/', methodController.post);
router.delete('/:methodObjId', methodController.del);
router.put('/:methodObjId', methodController.put);

export default router;
