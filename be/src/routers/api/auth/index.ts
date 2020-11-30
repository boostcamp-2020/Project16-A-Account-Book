import Router from 'koa-router';
import * as authController from 'controllers/auth';

const router = new Router();

router.get('/github', authController.githubAuthRequest);

router.get('/github/callback', authController.githubCallBack);

router.get('/github/access_token', authController.getGithubAccessToken);

export default router;
