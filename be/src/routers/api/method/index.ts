import Router from 'koa-router';
import methodController from '../../../controllers/method';

const router = new Router();
router.get('/:accountObjId', methodController.get);
export default router;
