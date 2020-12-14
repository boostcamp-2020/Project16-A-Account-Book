import Router from 'koa-router';
import { getInvitation, deleteInvitation } from 'controllers/user';

const router = new Router();

router.get('/', getInvitation);
router.delete('/:accountObjId', deleteInvitation);

export default router;
