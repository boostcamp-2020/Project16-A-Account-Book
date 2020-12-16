import Router from 'koa-router';
import koaCompose from 'koa-compose';
import categoryController from 'controllers/category';
import {
  isUnclassifide,
  titleIsUnclassified,
  isVaildLengthTitle,
} from 'middlewares';

const router = new Router();

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
  koaCompose([isUnclassifide, categoryController.deleteCategory]),
);

export default router;
