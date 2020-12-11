import Router from 'koa-router';
import mmsController from 'controllers/mms';

const router = new Router();

router.post('/', mmsController.post);

export default router;
