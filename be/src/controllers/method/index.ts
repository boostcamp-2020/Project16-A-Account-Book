import { Context } from 'koa';
import { AccountModel } from 'models/account';
import { getMethods, createMethod, removeMethod } from 'services/method';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const methods = await getMethods(accountObjId);
  ctx.status = 200;
  ctx.body = methods;
};

const post = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const { title } = ctx.request.body;
  const method = await createMethod(accountObjId, title);
  ctx.status = 201;
  ctx.body = {
    success: true,
    method,
  };
};

const del = async (ctx: Context) => {
  const { accountObjId, methodObjId } = ctx.params;
  await removeMethod(accountObjId, methodObjId);

  ctx.status = 204;
  ctx.res.end();
};
export default { get, post, del };
