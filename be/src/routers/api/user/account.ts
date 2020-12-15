import Router from 'koa-router';
import {
  getInvitation,
  deleteInvitation,
  agreeInvitation,
} from 'controllers/user';

const router = new Router();

router.get('/', getInvitation);
router.delete('/:accountObjId', deleteInvitation);
router.post('/:accountObjId', agreeInvitation);
export default router;
