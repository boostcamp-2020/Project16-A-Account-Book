import { Context } from 'koa';
import * as userService from 'services/user';

export const titleByAccountId = async (ctx: Context) => {
  const { accountId } = ctx.query;
  const title = await userService.titleByAccountId(accountId);
  ctx.status = 200;
  ctx.response.body = title;
};

export const getUserList = async (ctx: Context) => {
  const userList = await userService.getUserList();
  ctx.status = 200;
  ctx.body = userList;
};

export const getUserByAccessToken = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = ctx.request.body.user;
};
export const getInvitation = async (ctx: Context) => {
  const { user } = ctx.request.body;
  const accounts = await userService.getInvitation(user);
  const invitations = accounts.map((account: any, idx) => ({
    accountObjId: account._id,
    title: account.title,
    ownerName: account.ownerName,
    host: user.invitations[idx].host,
  }));
  ctx.body = invitations;
};

export default titleByAccountId;
