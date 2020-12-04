import Koa from 'koa';
import * as accountService from 'services/account';

export const get = async (ctx: Koa.Context) => {
  const res = await accountService.getAccounts();
  ctx.status = 200;
  ctx.response.body = res;
};

export default { get };
