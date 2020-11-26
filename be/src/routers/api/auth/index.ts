import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

const test = async (ctx: Koa.Context) => {
  ctx.body = 'test';
};

router.get('/', test);

export default router;
