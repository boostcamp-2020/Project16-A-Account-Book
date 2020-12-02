import Koa from 'koa';
import { getCategoryStatistics } from 'services/category';

const getStatisticsInfo = async (ctx: Koa.Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const statistics = await getCategoryStatistics(
    accountObjId,
    startDate,
    endDate,
  );
  ctx.status = 200;
  ctx.body = statistics;
};

export default { getStatisticsInfo };
