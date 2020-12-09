import Koa from 'koa';
import * as accountService from 'services/account';

export const get = async (ctx: Koa.Context) => {
  const res = await accountService.getAccountsByUserId(
    ctx.request.body.user._id,
  );
  console.log('res : ', res);

  if (!res || !res.accounts) {
    ctx.status = 204;
    ctx.response.body = [];
    return;
  }
  ctx.status = 200;
  ctx.response.body = res.accounts;
};

export const getThisAccountInfo = async (ctx: Koa.Context) => {
  const { title, owner } = ctx.query;
  const account = await accountService.getAccountByTitleAndOwner(title, owner);
  ctx.status = 200;
  ctx.body = account;
};
export default { get, getThisAccountInfo };
