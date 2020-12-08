import Router from 'koa-router';
import categoryController from 'controllers/category';
import { verifyAccountAccess } from 'middlewares';

const router = new Router();

router.get('/statistics', categoryController.getStatisticsInfo);

router.use('/', verifyAccountAccess);
router.get('/', categoryController.get);
router.post('/', categoryController.post);

export default router;
