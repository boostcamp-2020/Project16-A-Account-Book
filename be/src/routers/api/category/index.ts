import Router from 'koa-router';
import controller from 'controllers/category';

const router = new Router();

router.get('/statistics/:accountObjId', controller.getStatisticsInfo);
export default router;
