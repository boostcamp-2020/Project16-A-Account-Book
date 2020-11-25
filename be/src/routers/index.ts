import Router from 'koa-router';
import apiRouter from 'routers/api';

const router = new Router();

router.use('/api', apiRouter.routes());

export default router;
