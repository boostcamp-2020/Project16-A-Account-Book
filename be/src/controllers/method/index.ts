import { Context } from 'koa';
import { getMethods, createMethod } from 'services/method';

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
  ctx.body = method;
};
export default { get, post };
