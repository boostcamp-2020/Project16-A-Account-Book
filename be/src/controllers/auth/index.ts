import Koa from 'koa';
import * as authService from 'services/auth';

export const githubAuthRequest = async (ctx: Koa.Context) => {
  const githubAuthUrl = await authService.getGithubURL();
  ctx.status = 200;
  ctx.response.body = { githubAuthUrl };
};

export const facebookAuthRequest = async (ctx: Koa.Context) => {
  const facebookAuthUrl = await authService.getFacebookURL();
  ctx.status = 200;
  ctx.response.body = { facebookAuthUrl };
}

export const getGithubAccessToken = async (ctx: Koa.Context) => {
  const { code } = ctx.query;
  console.log(code);
  const { token, user } = await authService.getGithubAccessToken(code);
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  ctx.body = user;
};

export const getFacebookAccessToken = async (ctx: Koa.Context) => {
  const { code } = ctx.query;
  const { token, user } = await authService.getFacebookAccessToken(code);
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  ctx.body = user;
}
