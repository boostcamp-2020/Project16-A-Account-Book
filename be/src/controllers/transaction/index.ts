import Koa from 'koa';
import { getTransaction, saveAndAddToAccount } from 'services/transaction';

const get = async (ctx: Koa.Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const res = await getTransaction({ startDate, endDate, accountObjId });
  if (res.length === 0) {
    ctx.status = 204;
  } else {
    ctx.status = 200;
  }
  ctx.body = res;
};

const post = async (ctx: Koa.Context) => {
  const { transaction } = ctx.request.body;
  const { accountObjId } = ctx.params;
  try {
    await saveAndAddToAccount(transaction, accountObjId);
  } catch (e) {
    e.status = 400;
    throw e;
  }
  ctx.status = 201;
  ctx.res.end();
};

export default { get, post };
