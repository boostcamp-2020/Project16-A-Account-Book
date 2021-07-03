import Router from 'koa-router';
import * as authController from 'controllers/auth';

const router = new Router();

router.get('/github/access_token', authController.getGithubAccessToken);

router.get('/github', authController.githubAuthRequest);

router.get('/facebook/access_token', authController.getFacebookAccessToken);

router.get('/facebook', authController.facebookAuthRequest)

export default router;
