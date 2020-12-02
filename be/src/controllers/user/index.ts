import Koa from 'koa';
import * as userService from 'services/user';

export const titleByAccountId = async (ctx: Koa.Context) => {
  const { accountId } = ctx.query;
  const title = await userService.titleByAccountId(accountId);
  ctx.status = 200;
  ctx.response.body = title;
};

export default titleByAccountId;
