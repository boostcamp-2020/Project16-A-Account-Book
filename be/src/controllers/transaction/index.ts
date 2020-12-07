import Koa from 'koa';
import * as service from 'services/transaction';

const getTransactionList = async (ctx: Koa.Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const res = await service.getTransactionList({
    startDate,
    endDate,
    accountObjId,
  });
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
    await service.saveAndAddToAccount(transaction, accountObjId);
  } catch (e) {
    e.status = 400;
    throw e;
  }
  ctx.status = 201;
  ctx.res.end();
};

export default { getTransactionList, post };
