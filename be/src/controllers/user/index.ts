import Koa from 'koa';
import * as userService from 'services/user';

export const titleByAccountId = async (ctx: Koa.Context) => {
  const { accountId } = ctx.query;
  const title = await userService.titleByAccountId(accountId);
  ctx.status = 200;
  ctx.response.body = title;
};

export const getInvitation = async (ctx: Koa.Context) => {
  const { user } = ctx.request.body;
  const invitations = await userService.getInvitation(user);
  ctx.body = invitations;
};
export default titleByAccountId;
