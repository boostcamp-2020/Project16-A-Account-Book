import Koa from 'koa';
import * as authService from 'services/auth';
import { getFrontUrl } from 'config';

export const githubAuthRequest = async (ctx: Koa.Context) => {
  const githubAuthUrl = await authService.getGithubURL();
  ctx.status = 200;
  ctx.response.body = { githubAuthUrl };
};

export const getGithubAccessToken = async (ctx: Koa.Context) => {
  const { code } = ctx.query;
  const { token, user } = await authService.getGithubAccessToken(code);
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  ctx.body = user;
};
