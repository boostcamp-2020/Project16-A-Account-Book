import Router from 'koa-router';
import koaCompose from 'koa-compose';
import categoryController from 'controllers/category';
import { isUnclassifide, titleIsUnclassified } from 'middlewares';

const router = new Router();

router.get('/statistics', categoryController.getStatisticsInfo);

router.get('/', categoryController.get);
router.post('/', koaCompose([titleIsUnclassified, categoryController.post]));
router.put('/', koaCompose([titleIsUnclassified, categoryController.put]));
router.delete(
  '/:category',
  koaCompose([isUnclassifide, categoryController.deleteCategory]),
);

export default router;
