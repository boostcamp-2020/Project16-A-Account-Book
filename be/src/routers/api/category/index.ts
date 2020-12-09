import Router from 'koa-router';
import koaCompose from 'koa-compose';
import categoryController from 'controllers/category';
import { verifyAccountAccess, isUnclassifide } from 'middlewares';

const router = new Router();

router.get('/statistics', categoryController.getStatisticsInfo);

router.get('/', categoryController.get);
router.post('/', categoryController.post);
router.put('/', categoryController.put);
router.delete(
  '/:category',
  koaCompose([isUnclassifide, categoryController.deleteCategory]),
);

export default router;
