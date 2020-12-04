import { Context } from 'koa';
import { getCategories, getCategoryStatistics } from 'services/category';

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

export default { getStatisticsInfo, get };
