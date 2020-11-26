import Koa from 'koa';
import { getTransaction, createTransaction } from 'services/transaction';

const get = async (ctx: Koa.Context) => {
  const { year, month } = ctx.query;
  const res = await getTransaction({ year, month });
  ctx.status = 200;
  ctx.body = res;
};

const post = async (ctx: Koa.Context) => {
  await createTransaction(ctx.request.body);
  ctx.status = 201;
  ctx.res.end();
};

export default { get, post };
