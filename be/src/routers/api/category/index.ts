import Router from 'koa-router';
import categoryController from 'controllers/category';

const router = new Router();

router.get('/:accountObjId', categoryController.get);
router.get('/statistics/:accountObjId', categoryController.getStatisticsInfo);

export default router;
