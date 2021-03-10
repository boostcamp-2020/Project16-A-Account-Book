import Router from 'koa-router';
import koaCompose from 'koa-compose';
import categoryController from 'controllers/category';
import {
  titleIsUnclassified,
  isVaildLengthTitle,
} from 'middlewares';

const router = new Router();
router.get('/one/:categoryId', categoryController.getOneCategory);
router.get('/', categoryController.get);
router.post(
  '/',
  koaCompose([
    titleIsUnclassified,
    isVaildLengthTitle,
    categoryController.post,
  ]),
);
router.put(
  '/',
  koaCompose([titleIsUnclassified, isVaildLengthTitle, categoryController.put]),
);
router.delete(
  '/:category',
  koaCompose([categoryController.deleteCategory]),
);

export default router;
