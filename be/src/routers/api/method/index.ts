import Router from 'koa-router';
import methodController from 'controllers/method';

const router = new Router();

router.get('/', methodController.get);
router.post('/', methodController.post);

export default router;
