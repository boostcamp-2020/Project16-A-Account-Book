import { Context } from 'koa';
import { getMethods } from 'services/method';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const methods = await getMethods(accountObjId);
  ctx.status = 200;
  ctx.body = methods;
};

export default { get };
