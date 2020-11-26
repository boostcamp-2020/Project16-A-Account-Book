import Router from 'koa-router';
import * as authController from '../../../controllers/authController';

const router = new Router();

router.get('/', (ctx) => {
  console.log(ctx.cookies.get('access_token'));
  ctx.body = 'this is user...';
});

router.get('/github', authController.githubAuthRequest);

router.get('/github/callback', authController.githubCallBack);

router.get('/github/access_token', authController.getGithubAccessToken);

export default router;
