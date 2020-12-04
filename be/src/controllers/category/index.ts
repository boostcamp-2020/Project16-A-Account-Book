import { Context } from 'koa';
import {
  getCategories,
  postCategory,
  getCategoryStatistics,
} from 'services/category';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const categorisedType = await getCategories(accountObjId);
  ctx.status = 200;
  ctx.body = categorisedType;
};

const getStatisticsInfo = async (ctx: Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const statistics = await getCategoryStatistics(
    accountObjId,
    startDate,
    endDate,
  );
  ctx.body = statistics;
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
