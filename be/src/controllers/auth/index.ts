import Koa from 'koa';
import * as authService from '../../services/auth';

export const githubAuthRequest = async (ctx: Koa.Context) => {
  const githubAuthUrl = await authService.getGithubURL();
  ctx.status = 200;
  ctx.response.body = { githubAuthUrl };
};

export const githubCallBack = async (ctx: Koa.Context) => {
  const { code } = ctx.query;
  ctx.redirect(`http://localhost:3000/temppage/${code}`);
};

export const getGithubAccessToken = async (ctx: Koa.Context) => {
  const { code } = ctx.query;
  const token = await authService.getGithubAccessToken(code);
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  ctx.body = 'done';
};
