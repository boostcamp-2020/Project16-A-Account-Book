import Router from 'koa-router';
import randomstring from 'randomstring';
import querystring from 'querystring';
import axios from 'axios';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'this is user...';
});

router.get('/auth/github', (ctx) => {
  const state = randomstring.generate();
  const url = 'https://github.com/login/oauth/authorize?';
  const query = querystring.stringify({
    client_id: process.env.GITHUB_ID,
    redirect_uri: 'http://localhost:4000/user/auth/github/callback',
    state,
    scope: 'user:email',
  });
  const githubAuthUrl = url + query;
  ctx.body = { githubAuthUrl };
});

router.get('/auth/github/callback', async (ctx) => {
  const { code } = ctx.query;
  const res = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id: process.env.GITHUB_ID,
      client_secret: process.env.GITHUB_SECRET,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
  const accessToken = res.data.access_token;
  const USER_PROFILE_URL = 'https://api.github.com/user';
  const data = await axios.get(USER_PROFILE_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  ctx.cookies.set('access_token', accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }); // 이걸로 바로 token?
  ctx.body = data.data; // 회원가입 하고 token넘겨주기...?
});

export default router;
