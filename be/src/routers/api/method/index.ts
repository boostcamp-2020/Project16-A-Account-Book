import Router from 'koa-router';
import methodController from 'controllers/method';

const router = new Router();
router.get('/', methodController.get);
export default router;
