import Router from 'koa-router';
import categoryController from 'controllers/category';

const router = new Router();

router.get('/:accountObjId', categoryController.get);
router.get('/statistics/:accountObjId', categoryController.getStatisticsInfo);
router.post('/', categoryController.post);

export default router;
