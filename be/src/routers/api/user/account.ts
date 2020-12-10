import Router from 'koa-router';
import { getInvitation } from 'controllers/user';

const router = new Router();

router.get('/', getInvitation);
export default router;
