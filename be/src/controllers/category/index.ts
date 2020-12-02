import Koa from 'koa';
import { getTotalPriceByClassification } from 'services/transaction';

const getStatisticsInfo = async (ctx: Koa.Context) => {
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

export default { getStatisticsInfo };
