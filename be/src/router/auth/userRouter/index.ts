import Router from 'koa-router';
import randomstring from 'randomstring';
import querystring from 'querystring';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { UserModel } from '../../../models/user';

const router = new Router();

const jwtString: string = process.env.JWT_SECRET || '모듈화수정?';

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
  ctx.redirect(`/temppage?code=${code}`);
});

router.get('/auth/github/access_token', async (ctx) => {
  const { code } = ctx.params;
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
  const profile = data.data;
  const user = await UserModel.findOne({ where: { id: profile.id } });
  if (!user) {
    const newUser = new UserModel({
      id: profile.id,
    });
    newUser.save((err) => {
      if (err) ctx.body = { error: err };
    });
  }
  const token = jwt.sign(profile.id, jwtString);
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  ctx.body = { success: true };
});

export default router;
