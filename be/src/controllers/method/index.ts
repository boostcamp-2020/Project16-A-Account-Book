import { Context } from 'koa';
import { AccountModel } from 'models/account';
import { updateUnclassifiedMethod } from 'libs/error';
import {
  getMethods,
  createMethod,
  removeMethod,
  updateMethod,
} from 'services/method';

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

const put = async (ctx: Context) => {
  const { methodObjId, accountObjId } = ctx.params;
  const { title }: { title: string | null | undefined } = ctx.request.body;
  if (!title || title.trim() === '' || title.trim() === '미분류')
    throw updateUnclassifiedMethod;
  const unclassifiedMethod = await AccountModel.findUnclassifiedMethod(
    accountObjId,
  );
  const target = title.trim();
  if (String(unclassifiedMethod) === methodObjId)
    throw updateUnclassifiedMethod;

  await updateMethod(methodObjId, target);
  ctx.status = 201;
  ctx.body = {
    success: true,
  };
};
export default { get, post, del, put };
