import Koa from 'koa';
import * as accountService from 'services/account';

export const get = async (ctx: Koa.Context) => {
  const res = await accountService.getAccountsByUserId(
    ctx.request.body.user._id,
  );

  if (!res) {
    ctx.status = 204;
    return;
  }
  ctx.status = 200;
  ctx.response.body = res;
};

export const postAccount = async (ctx: Koa.Context) => {
  await accountService.addAccountByUserAndAccountInfo(
    ctx.request.body.user,
    ctx.request.body.title,
    ctx.request.body.userObjIdList,
  );
  ctx.status = 201;
  ctx.response.body = { success: true };
};

export const putAccount = async (ctx: Koa.Context) => {
  await accountService.updateAccountByUserAndAccountInfo(
    ctx.request.body.title,
    ctx.params.accountObjId,
    ctx.request.body.userObjIdList,
  );
  ctx.status = 200;
  ctx.response.body = { success: true };
};

export const deleteAccount = async (ctx: Koa.Context) => {
  await accountService.deleteAccountByAccountInfo(ctx.params.accountObjId);
  ctx.status = 200;
  ctx.response.body = { success: true };
};

export const getThisAccountInfo = async (ctx: Koa.Context) => {
  const { title, owner } = ctx.query;
  const account = await accountService.getAccountByTitleAndOwner(title, owner);
  ctx.status = 200;
  ctx.body = account;
};

export const postAccountUser = async (ctx: Koa.Context) => {
  const { accountObjId } = ctx.params;
  const { userObjId } = ctx.request.body;
  await accountService.addUserInAccount(accountObjId, userObjId);

  ctx.status = 200;
  ctx.body = { message: 'success' };
};

export default {
  get,
  postAccount,
  putAccount,
  deleteAccount,
  getThisAccountInfo,
  postAccountUser,
};
