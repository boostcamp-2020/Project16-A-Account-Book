import { Context } from 'koa';
import { getCategories, postCategory } from 'services/category';
import { getTotalPriceByClassification } from 'services/transaction';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const categorisedType = await getCategories(accountObjId);
  ctx.status = 200;
  ctx.body = categorisedType;
};

const getStatisticsInfo = async (ctx: Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const totalPayments = await getTotalPriceByClassification(
    accountObjId,
    startDate,
    endDate,
  );
  ctx.status = 200;
  ctx.body = { totalPayments };
};

const post = async (ctx: Context) => {
  const { type, title, color, accountObjId } = ctx.request.body;
  const res = await postCategory(type, title, color, accountObjId);
  if (res.success) {
    ctx.status = 200;
    ctx.body = res;
  } else {
    ctx.status = 401;
    ctx.body = res;
  }
};

export default { getStatisticsInfo, get, post };
